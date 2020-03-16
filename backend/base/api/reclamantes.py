from rest_framework import serializers, viewsets
from base.models import Reclamante

class ReclamantesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reclamante
        fields = ['nombre',
                 'apellido_paterno',
                 'apellido_materno',
                 'fecha_nac',
                 'telefono1',
                 'telefono2',
                 'rut',
                 'afectado',
                 'documento',
                 'nacionalidad'
                 ]

class ReclamanteView(viewsets.ModelViewSet):
    queryset = Reclamante.objects.all()
    serializer_class = ReclamantesSerializer
