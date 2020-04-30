from rest_framework import serializers, viewsets
from server.models import Historia_Proceso

class HistorialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Historia_Proceso
        fields = "__all__"

class HistorialView(viewsets.ModelViewSet):
    queryset = Historia_Proceso.objects.all()
    serializer_class = HistorialSerializer
