from rest_framework import serializers, viewsets
from server.models import Tipo_Aseguradora

class TipoAseguradoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Aseguradora
        fields = "__all__"

class TipoAseguradoraView(viewsets.ModelViewSet):
    queryset = Tipo_Aseguradora.objects.all()
    serializer_class = TipoAseguradoraSerializer
