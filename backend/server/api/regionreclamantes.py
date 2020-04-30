from rest_framework import serializers, viewsets
from server.models import RegionReclamante

class RegionRecSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegionReclamante
        fields = ['descripcion',
                  'id'
                  ]

class RegionRecView(viewsets.ModelViewSet):
    queryset = RegionReclamante.objects.all()
    serializer_class = RegionRecSerializer
