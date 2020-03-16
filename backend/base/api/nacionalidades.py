from rest_framework import serializers, viewsets
from base.models import Nacionalidad

class NacionalidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nacionalidad
        fields = ['afectado']


class NacionalidadView(viewsets.ModelViewSet):
    queryset = Nacionalidad.objects.all()
    serializer_class = NacionalidadSerializer
