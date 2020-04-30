from rest_framework import serializers, viewsets
from server.models import SexoReclamante

class SexoRecSerializer(serializers.ModelSerializer):
    class Meta:
        model = SexoReclamante
        fields = ['descripcion',
                  'id'
                  ]

class SexoRecView(viewsets.ModelViewSet):
    queryset = SexoReclamante.objects.all()
    serializer_class = SexoRecSerializer
