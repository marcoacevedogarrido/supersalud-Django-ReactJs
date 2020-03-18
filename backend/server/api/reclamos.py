from rest_framework import serializers, viewsets
from server.models import Reclamo

class ReclamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reclamo
        fields = ['fecha_presentacion',
                  'fecha_cierre',
                  'materia',
                  'sub_materia1',
                  'sub_materia2',
                  'sub_materia3',
                  'descripcion_problema',
                  'solucion_esperada',
                  'afectado',
                  'tipo_reclamo',
                  'reclamante'
                 ]

class ReclamoView(viewsets.ModelViewSet):
    queryset = Reclamo.objects.all()
    serializer_class = ReclamoSerializer
