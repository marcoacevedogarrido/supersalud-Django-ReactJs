from rest_framework import serializers, viewsets
from server.models import Tipo_Calle

class Tipo_CalleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Calle
        fields= "__all__"

class EstadoCivilView(viewsets.ModelViewSet):
    queryset = Tipo_Calle.objects.all()
    serializer_class = Tipo_CalleSerializers
