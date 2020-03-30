from rest_framework import serializers, viewsets
from server.models import Historial

class HistorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Historial
        fields = ['usuario',
                  'fecha',
                  'reclamante'
                  ]

class HistorialView(viewsets.ModelViewSet):
    queryset = Historial.objects.all()
    serializer_class = HistorialSerializer
