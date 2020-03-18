from rest_framework import serializers, viewsets
from server.models import Documento

class DocumentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documento
        fields = ['documento_plantilla']

class DocumentoView(viewsets.ModelViewSet):
    queryset = Documento.objects.all()
    serializer_class = DocumentosSerializer
