from rest_framework import serializers, viewsets
from server.models import Genero

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ['mujer',
                  'hombre',
                  'persona_trans',
                  'reclamante',
                  'afectado',
                  ]

class GeneroView(viewsets.ModelViewSet):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer
