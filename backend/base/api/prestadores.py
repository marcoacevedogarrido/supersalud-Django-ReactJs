from rest_framework import serializers, viewsets
from base.models import Prestador

class PrestadorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Prestador
        fields = ['nombre_institucion',
                  'fecha_problema',
                  'fecha_res_recl_aprestador',
                  'fecha_res_pres',
                  'fecha_notificacion',
                  'reclamo',
                  'afectado',
                  'tipo_reclamo',
                  'reclamante'
                 ]

class PrestadoresView(viewsets.ModelViewSet):
    queryset = Prestador.objects.all()
    serializer_class = PrestadorSerializers
