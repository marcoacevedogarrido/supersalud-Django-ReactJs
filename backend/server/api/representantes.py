from rest_framework import serializers, viewsets
from server.models import Representante
<<<<<<< HEAD

class RepresentanteSerializer(serializers.ModelSerializer):
=======
from server.api.aseguradoras import AseguradoraSerializer

class RepresentanteSerializer(serializers.ModelSerializer):
    aseguradora = AseguradoraSerializer()

>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87
    class Meta:
        model = Representante
        fields = '__all__'

class RepresentanteView(viewsets.ModelViewSet):
    queryset = Representante.objects.all()
    serializer_class = RepresentanteSerializer
