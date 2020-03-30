from rest_framework import serializers, viewsets
from server.models import Reclamo_reclamante

class ReclamoReclamanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reclamo_reclamante
        fields = ['reclamante',
                  'reclamo',
                  'afectado',
                  'tipo_reclamo'
                 ]

class ReclamoReclamanteView(viewsets.ModelViewSet):
    queryset = Reclamo_reclamante.objects.all()
    serializer_class = ReclamoReclamanteSerializer
