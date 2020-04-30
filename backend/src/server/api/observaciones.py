import os
from django.shortcuts import render
import requests
import json
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, viewsets, permissions
from server.models import Process_Instance, Observacion
from rest_framework import status
from rest_framework.pagination import(
    LimitOffsetPagination,
    PageNumberPagination
)
from rest_framework import filters


class ObservacionSerializers(serializers.ModelSerializer):

    class Meta:
        model = Observacion
        fields = '__all__'
    
    def to_representation(self, instance):
        observacion = super(ObservacionSerializers, self).to_representation(instance)
        user = instance.user
        tarea = instance.tarea
        reclamo = instance.reclamo
        observacion['user'] = str(user)
        observacion['reclamo'] = str(reclamo)
        observacion['tarea'] = str(instance.tarea)


        return observacion

        

class ObservacionsViews(APIView):
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    # pagination_class = LargeResultsSetPagination
    # search_fields = [
    #     'id',
    #     'nombre',
    #     'modelo__nombre',
    #     'fecha_creacion',
    #     'estado__nombre', 
    # ]
    # filter_backends = (filters.SearchFilter,)
    serializer_class = ObservacionSerializers

    def post(self, request, format=None):
        serializer = ObservacionSerializers(data=request.data)
        if serializer.is_valid():
            observacion = serializer.save(user=self.request.user)
            return Response({"message": "Observación Creada"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



    def get(self, request, format=None):
        usuario = self.request.user
        get_user =  Observacion.objects.all()
        serializers = ObservacionSerializers(get_user, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
        # return Response({"message": "Error del servidor"}, status=status.HTTP_200_OK)
