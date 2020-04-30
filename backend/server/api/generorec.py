from rest_framework import serializers, viewsets
from server.models import GeneroReclamante

class GeneroRecSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneroReclamante
        fields = ['descripcion',
                  'id'
                  ]

class GeneroRecView(viewsets.ModelViewSet):
    queryset = GeneroReclamante.objects.all()
    serializer_class = GeneroRecSerializer
