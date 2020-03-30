from rest_framework import serializers, viewsets
from server.models import Estado_civil

class EstadoCivilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estado_civil
        fields= ['soltero',
                 'casado',
                 'viudo',
                 'separado',
                 'divorciado',
                 'union_libre',
                 'reclamante',
                 'afectado'
                ]

class EstadoCivilView(viewsets.ModelViewSet):
    queryset = Estado_civil.objects.all()
    serializer_class = EstadoCivilSerializer
