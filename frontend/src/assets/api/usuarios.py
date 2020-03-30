from rest_framework import serializers, viewsets
from server.models import Usuario

class UsuarioSerializers(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['nombre',
                  'rut',
                  'apellido_paterno',
                  'apellido_materno',
                  'fecha_nac',
                  'correo_electronico',
                  ]


class UsuarioView(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializers
