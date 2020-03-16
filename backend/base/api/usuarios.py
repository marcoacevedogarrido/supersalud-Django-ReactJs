from rest_framework import serializers, viewsets
from base.models import Usuario
from rest_framework import views

class UsuarioSerializers(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombre', 'rut']


class UsuarioView(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers
