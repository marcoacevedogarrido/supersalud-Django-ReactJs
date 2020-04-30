from rest_framework import serializers, viewsets
from server.models import Process_Definition

class Process_DefinitionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Process_Definition
        fields = "__all__"

class New_Process_DefinitionView(viewsets.ModelViewSet):
    queryset = Process_Definition.objects.all()
    serializer_class = Process_DefinitionSerializers
