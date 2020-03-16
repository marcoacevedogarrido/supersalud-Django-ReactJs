from rest_framework import serializers, viewsets
from base.models import Historial

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
