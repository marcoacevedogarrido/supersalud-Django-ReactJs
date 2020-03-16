from rest_framework import serializers, viewsets
from base.models import Region

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ['descripcion',
                  'aseguradora',
                  'reclamo',
                  'afectado',
                  'tipo_reclamo',
                  'reclamante'
                 ]

class RegionView(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer
