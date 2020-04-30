from rest_framework import serializers, viewsets
from server.models import NacionalidadRepresentante

class NacionalidadRepSerializer(serializers.ModelSerializer):
    class Meta:
        model = NacionalidadRepresentante
        fields = ['descripcion',
                  'id'
                  ]

class NacionalidadRepView(viewsets.ModelViewSet):
    queryset = NacionalidadRepresentante.objects.all()
    serializer_class = NacionalidadRepSerializer
