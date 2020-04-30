from rest_framework import serializers, viewsets
from server.models import Tipo_Reclamo

class TipoReclamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Reclamo
        fields = "__all__"

class TipoReclamoView(viewsets.ModelViewSet):
    queryset = Tipo_Reclamo.objects.all()
    serializer_class = TipoReclamoSerializer
