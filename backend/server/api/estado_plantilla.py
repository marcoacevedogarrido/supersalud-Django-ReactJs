from rest_framework import serializers, viewsets
from server.models import Estado_Plantilla

class Estado_PlantillaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Historia_Proceso
        fields = "__all__"

class Estado_PlantillaView(viewsets.ModelViewSet):
    queryset = Estado_Plantilla.objects.all()
    serializer_class = Estado_PlantillaSerializers
