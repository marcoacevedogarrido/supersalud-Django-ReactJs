from rest_framework import serializers, viewsets
from server.models import Tarea

class TareaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = "__all__"

class TipoReclamoView(viewsets.ModelViewSet):
    queryset = Tarea.objects.all()
    serializer_class = TareaSerializers
