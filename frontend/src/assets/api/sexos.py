from rest_framework import serializers, viewsets
from server.models import Sexo

class SexoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sexo
        fields = ['sexo',
                  'afectado',
                  'reclamante'
                 ]

class SexoView(viewsets.ModelViewSet):
    queryset = Sexo.objects.all()
    serializer_class = SexoSerializer
