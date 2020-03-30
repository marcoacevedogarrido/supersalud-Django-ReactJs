from rest_framework import serializers, viewsets
from server.models import Afectado

class AfectadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Afectado
        fields = ['nombre',
                  'apellido_paterno',
                  'apellido_materno',
                  'fecha_nac',
                  'rut',
                  'telefono1',
                  'telefono2',
                  'comuna'
                 ]

class AfectadoView(viewsets.ModelViewSet):
    queryset = Afectado.objects.all()
    serializer_class = AfectadoSerializer
