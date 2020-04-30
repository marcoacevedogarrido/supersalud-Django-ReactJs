from rest_framework import serializers, viewsets
from server.models import Instancia

class InstanciaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Instancia
        fields = "__all__"

class InstanciaSerializersView(viewsets.ModelViewSet):
    queryset = Instancia.objects.all()
    serializer_class = InstanciaSerializers
