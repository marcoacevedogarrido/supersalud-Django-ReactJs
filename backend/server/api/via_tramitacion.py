from rest_framework import serializers, viewsets
from server.models import Via_Tramitacion

class Via_TramitacionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Via_Tramitacion
        fields = "__all__"

class ProcesoView(viewsets.ModelViewSet):
    queryset = Via_Tramitacion.objects.all()
    serializer_class = Via_TramitacionSerializers
