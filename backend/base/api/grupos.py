from rest_framework import serializers, viewsets
from base.models import Grupo

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
        fields = ['admisibilidad_if',
                  'admisibilidad_ip',
                  'grupo_permiso',
                  'usuario_grupo'
                 ]

class GrupoView(viewsets.ModelViewSet):
    queryset = Grupo.objects.all()
    serializer_class = GrupoSerializer
