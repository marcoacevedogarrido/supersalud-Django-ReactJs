from rest_framework import serializers, viewsets
from base.models import Tipo_usuario

class TipoUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_usuario
        fields = ['id']

class TipoUsuarioView(viewsets.ModelViewSet):
    queryset = Tipo_usuario.objects.all()
    serializer_class = TipoUsuarioSerializer
