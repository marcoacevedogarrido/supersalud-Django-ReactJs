from rest_framework import serializers, viewsets
from base.models import Submateria

class SubmateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submateria
        fields = ['descripcion1',
                  'descripcion2',
                  'descripcion3',
                  'materia',
                  'reclamo',
                  'afectado',
                  'tipo_reclamo',
                  'reclamante'
                 ]

class SubmateriaView(viewsets.ModelViewSet):
    queryset = Submateria.objects.all()
    serializer_class = SubmateriaSerializer
