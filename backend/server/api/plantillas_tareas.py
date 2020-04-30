from rest_framework import serializers, viewsets
from server.models import Plantillas_Tareas

class Plantillas_TareasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Plantillas_Tareas
        fields = "__all__"

class Plantillas_TareasSerializersView(viewsets.ModelViewSet):
    queryset = Plantillas_Tareas.objects.all()
    serializer_class = Plantillas_TareasSerializers
