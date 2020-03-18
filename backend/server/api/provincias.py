from rest_framework import serializers, viewsets
from server.models import Provincia

class ProvinciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provincia
        fields = ['comuna',
                  'afectado',
                  'region',
                  'reclamante',
                  'aseguradora',
                  'reclamo',
                  'tipo_reclamo'
                 ]

class ProvinciaView(viewsets.ModelViewSet):
    queryset = Provincia.objects.all()
    serializer_class = ProvinciaSerializer
