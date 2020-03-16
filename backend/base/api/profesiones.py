from rest_framework import serializers, viewsets
from base.models import Profesion

class ProfesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesion
        fields = ['profesion', 'reclamante']


class ProfesionView(viewsets.ModelViewSet):
    queryset = Profesion.objects.all()
    serializer_class = ProfesionSerializer
