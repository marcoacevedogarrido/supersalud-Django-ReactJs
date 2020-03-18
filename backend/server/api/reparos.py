from rest_framework import serializers, viewsets
from server.models import Reparo

class ReparosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reparo
        fields = ['descripcion',
                  'cursar_reclamo',
                  'reclamo',
                  'afectado',
                  'tipo_reclamo',
                  'reclamante'
                 ]

class ReparoView(viewsets.ModelViewSet):
    queryset = Reparo.objects.all()
    serializer_class = ReparosSerializer
