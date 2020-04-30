from rest_framework import serializers, viewsets
from server.models import GeneroRepresentante

class GeneroRepSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneroRepresentante
        fields = ['descripcion',
                  'id'
                  ]

class GeneroRepView(viewsets.ModelViewSet):
    queryset = GeneroRepresentante.objects.all()
    serializer_class = GeneroRepSerializer
