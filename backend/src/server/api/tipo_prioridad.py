from rest_framework import serializers, viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser
from rest_framework.views import APIView
from rest_framework import status
import json

from server.models import Tipo_Prioridad

class Tipo_PrioridadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tipo_Prioridad
        fields = "__all__"