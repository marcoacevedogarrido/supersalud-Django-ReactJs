from rest_framework import serializers, viewsets
from server.models import SexoRepresentante

class SexoRepSerializer(serializers.ModelSerializer):
    class Meta:
        model = SexoRepresentante
        fields = ['descripcion',
                  'id'
                  ]

class SexoRepView(viewsets.ModelViewSet):
    queryset = SexoRepresentante.objects.all()
    serializer_class = SexoRepSerializer
