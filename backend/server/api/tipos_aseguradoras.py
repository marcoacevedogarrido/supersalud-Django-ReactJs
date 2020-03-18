from rest_framework import serializers, viewsets
from server.models import Tipo_aseguradora

class TipoAseguradoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_aseguradora
        fields = ['nombre_aseguradora',
                  'rut_aseguradora',
                  'direccion',
                  'telefono',
                  'comuna',
                  'region',
                  'aseguradora',
                  'reclamo',
                  'afectado',
                  'tipo_reclamo',
                  'reclamante'
                 ]

class TipoAseguradoraView(viewsets.ModelViewSet):
    queryset = Tipo_aseguradora.objects.all()
    serializer_class = TipoAseguradoraSerializer
