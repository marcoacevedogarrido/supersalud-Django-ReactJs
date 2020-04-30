from rest_framework import serializers, viewsets
from server.models import ComunaRepresentante

class ComunaRepSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComunaRepresentante
        fields = ['descripcion',
                  'id'
                  ]

class ComunaRepView(viewsets.ModelViewSet):
    queryset = ComunaRepresentante.objects.all()
    serializer_class = ComunaRepSerializer
