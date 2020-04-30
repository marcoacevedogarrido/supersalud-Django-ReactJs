from rest_framework import serializers, viewsets
from server.models import Aseguradora

class AseguradoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aseguradora
        fields = "__all__"

class AseguradoraView(viewsets.ModelViewSet):
    queryset = Aseguradora.objects.all()
    serializer_class = AseguradoraSerializer
