from rest_framework import serializers, viewsets
from server.models import Direccion

class DireccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direccion
        fields = ['calle',
                  'pasaje',
                  'avenida',
                  'reclamante',
                  'afectado'
                  ]

class DireccionView(viewsets.ModelViewSet):
    queryset = Direccion.objects.all()
    serializer_class = DireccionSerializer
