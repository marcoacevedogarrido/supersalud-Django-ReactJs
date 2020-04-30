from rest_framework import serializers, viewsets
from server.models import Sub_Materia

class SubmateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sub_Materia
        fields = ("descripcion",)

class SubmateriaView(viewsets.ModelViewSet):
    queryset = Sub_Materia.objects.all()
    serializer_class = SubmateriaSerializer
