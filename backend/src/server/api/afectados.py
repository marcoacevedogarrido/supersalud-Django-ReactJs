from rest_framework import serializers, viewsets
from server.models import Afectado

class AfectadoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Afectado
        fields = "__all__"


class AfectadoView(viewsets.ModelViewSet):
    queryset = Afectado.objects.all()
    serializer_class = AfectadoSerializer
