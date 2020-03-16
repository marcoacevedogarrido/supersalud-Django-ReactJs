from rest_framework import serializers, viewsets
from base.models import Usuario_grupo

class UsuarioGrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario_grupo
        fields = ['admisibilidad_if']

class UsuarioGrupoView(viewsets.ModelViewSet):
    queryset = Usuario_grupo.objects.all()
    serializer_class = UsuarioGrupoSerializer
