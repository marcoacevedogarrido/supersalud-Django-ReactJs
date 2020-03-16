from rest_framework import serializers, viewsets
from base.models import Documento_plantilla

class DocumentoPlantillaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documento_plantilla
        fields = ['id']

class DocumentoPlantillaView(viewsets.ModelViewSet):
    queryset = Documento_plantilla.objects.all()
    serializer_class = DocumentoPlantillaSerializer
