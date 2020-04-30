from rest_framework import serializers, viewsets
from server.models import Prestador

class PrestadorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Prestador
        fields = "__all__"

class PrestadoresView(viewsets.ModelViewSet):
    queryset = Prestador.objects.all()
    serializer_class = PrestadorSerializers
