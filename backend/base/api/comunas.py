from rest_framework import serializers, viewsets
from base.models import Comuna

class ComunaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comuna
        fields = ['id', 'comuna']

class ComunaView(viewsets.ModelViewSet):
    queryset = Comuna.objects.all()
    serializer_class = ComunaSerializer
