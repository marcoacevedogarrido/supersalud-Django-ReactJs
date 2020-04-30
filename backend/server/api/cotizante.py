from rest_framework import serializers, viewsets
from server.models import Cotizante

from server.api.nacionalidades import NacionalidadSerializer

class CotizanteSerializers(serializers.ModelSerializer):

    nacionalidad = NacionalidadSerializer()

    class Meta:
        model = Cotizante
        fields = "__all__"


class CotizanteView(viewsets.ModelViewSet):
    queryset = Cotizante.objects.all()
    serializer_class = CotizanteSerializers
