from rest_framework import serializers, viewsets
from server.models import Representante
from server.api.aseguradoras import AseguradoraSerializer

class RepresentanteSerializer(serializers.ModelSerializer):
    aseguradora = AseguradoraSerializer()

    class Meta:
        model = Representante
        fields = '__all__'

class RepresentanteView(viewsets.ModelViewSet):
    queryset = Representante.objects.all()
    serializer_class = RepresentanteSerializer
