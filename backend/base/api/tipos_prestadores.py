from rest_framework import serializers, viewsets
from base.models import Tipo_prestador

class TipoPrestadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_prestador
        fields = ['publico',
                  'privado',
                  'prestador',
                  'reclamo',
                  'afectado',
                  'tipo_reclamo',
                  'reclamante'
                 ]

class TipoPrestadorView(viewsets.ModelViewSet):
    queryset = Tipo_prestador.objects.all()
    serializer_class = TipoPrestadorSerializer
