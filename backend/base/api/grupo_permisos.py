from rest_framework import serializers, viewsets
from base.models import Grupo_permiso

class GrupoPermisoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo_permiso
        fields = ['id', 'usuario_grupo']

class GrupoPermisoView(viewsets.ModelViewSet):
    queryset = Grupo_permiso.objects.all()
    serializer_class = GrupoPermisoSerializer
