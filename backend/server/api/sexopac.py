from rest_framework import serializers, viewsets
from server.models import SexoPaciente

class SexoPacSerializer(serializers.ModelSerializer):
    class Meta:
        model = SexoPaciente
        fields = ['descripcion',
                  'id'
                  ]

class SexoPacView(viewsets.ModelViewSet):
    queryset = SexoPaciente.objects.all()
    serializer_class = SexoPacSerializer
