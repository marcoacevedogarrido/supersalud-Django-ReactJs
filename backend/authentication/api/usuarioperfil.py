from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, permissions, serializers, generics, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
import requests
from django.http import JsonResponse


class TokenObtainSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(TokenObtainSerializer, cls).get_token(user)
        token['username'] = user.username
        return token

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ("id", "username", "email")


class CustomActiveDirectorySerializer(serializers.ModelSerializer):

    username = serializers.CharField()
    password = serializers.CharField(min_length=3, write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password')
        extra_kwargs = {'password': {'write_only': True}}


    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CustomActiveDirectoryView(APIView):
    serializers_class = CustomActiveDirectorySerializer
    permission_classes = (permissions.AllowAny,)


    def post(self, request, format='json'):
        serializer = CustomActiveDirectorySerializer(data=request.data)
        username = list(request.data.values())[0]
        password = list(request.data.values())[1]
        validar_username = validate_username(username)
        if serializer.is_valid():
            if validar_username:
                print("ya existe el usuario, entonces devuelvo el token")
                # token = get_tokens_for_user(username)
                get_user = User.objects.get(username=username)
                tokens = TokenObtainSerializer(request.data).validate(request.data)
                return Response(tokens, status=status.HTTP_200_OK)
            else:
                print("no existe, entonces si en el servicio lo trae lo creo y le devuelvo el token")
                r = validate_service(username, password)
                if not r.text == "" and r.status_code == 200:
                    user = serializer.save()
                    if user:
                        get_user = User.objects.get(username=username)
                        tokens = TokenObtainSerializer(request.data).validate(request.data)
                        return Response(tokens, status=status.HTTP_201_CREATED)
                    
                else:
                    # ACA LO CREO Y DEVUELVO EL TOKEN
                    message = {"message": "Usuario o contraseña incorrecta"}
                    return Response(message, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def validate_service(username_body, password_body):
    url_ad = 'http://30.30.30.105:8082/ActiveDirectoryLoginWSREST/services/obtener/usuario'
    data = {
        "userService": "fiscalizacion",
        "passwordService": "super.fiscalizacion2017",
        "auth_user": username_body,
        "auth_password": password_body
    }
    r = requests.post(url_ad, json=data)
    return r


def validate_username(username):
    if User.objects.filter(username=username).exists():
        return True
    return False


class LogoutAndBlackListRefreshTokenView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class Validate_Token(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user