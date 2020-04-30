<<<<<<< HEAD
from rest_framework import serializers, viewsets
from server.models import Reclamante
from itertools import cycle

class ReclamantesSerializer(serializers.ModelSerializer):
    digito_verificador =  serializers.SerializerMethodField()

    class Meta:
        model = Reclamante
        read_only_fields = ['historial']
        fields = ['nombre',
                 'apellido_paterno',
                 'apellido_materno',
                 'fecha_nac',
                 'telefono1',
                 'telefono2',
                 'rut',
                 'historial',
                 'afectado',
                 'genero',
                 'documento',
                 'profesion',
                 'direccion',
                 'estado_civil',
                 'sexo',
                 'nacionalidad',
                 'region',
                 'provincia',
                 'comuna',
                 'digito_verificador'
                 ]

    def get_digito_verificador(self, obj):
        return 0


class ReclamanteView(viewsets.ModelViewSet):
    queryset = Reclamante.objects.all()
    serializer_class = ReclamantesSerializer
=======
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87
