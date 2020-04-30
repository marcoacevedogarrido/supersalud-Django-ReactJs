from rest_framework import serializers, viewsets
from server.models import Proceso

class ProcesoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Proceso
        fields = "__all__"

class ProcesoView(viewsets.ModelViewSet):
    queryset = Proceso.objects.all()
    serializer_class = ProcesoSerializers
