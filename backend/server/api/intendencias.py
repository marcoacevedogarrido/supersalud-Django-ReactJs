from rest_framework import serializers, viewsets
from server.models import Intendencia

class IntendenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intendencia
        fields = ['submateria',
                  'materia',
                  'reclamo',
                  'afectado',
                  'tipo_reclamo',
                  'reclamante'
                 ]

class IntendenciaView(viewsets.ModelViewSet):
    queryset = Intendencia.objects.all()
    serializer_class = IntendenciaSerializer
