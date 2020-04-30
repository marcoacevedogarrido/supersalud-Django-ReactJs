from rest_framework import serializers, viewsets
from server.models import Plantilla

class PlantillaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Plantilla
        fields = "__all__"

class PlantillaView(viewsets.ModelViewSet):
    queryset = Plantilla.objects.all()
    serializer_class = PlantillaSerializers
