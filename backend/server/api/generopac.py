from rest_framework import serializers, viewsets
from server.models import GeneroPaciente

class GeneroPacSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneroPaciente
        fields = ['descripcion',
                  'id'
                  ]

class GeneroPacView(viewsets.ModelViewSet):
    queryset = GeneroPaciente.objects.all()
    serializer_class = GeneroPacSerializer
