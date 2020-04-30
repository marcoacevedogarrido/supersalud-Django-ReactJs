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
<<<<<<< HEAD
=======

>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87
    class Meta:
        model = Observacion
        fields = '__all__'
    
    def to_representation(self, instance):
        observacion = super(ObservacionSerializers, self).to_representation(instance)
<<<<<<< HEAD
        print(instance.user)
        user = instance.user
        process_instance = instance.process_instance
        observacion['user'] = str(user)
        observacion['process_instance'] = str(process_instance)
=======
        user = instance.user
        tarea = instance.tarea
        reclamo = instance.reclamo
        observacion['user'] = str(user)
        observacion['reclamo'] = str(reclamo)
        observacion['tarea'] = str(instance.tarea)
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87


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
<<<<<<< HEAD
            print(observacion)
=======
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87
            return Response({"message": "Observación Creada"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



    def get(self, request, format=None):
        usuario = self.request.user
<<<<<<< HEAD
        get_user =  self.request.user.observaciones.all()
=======
        get_user =  Observacion.objects.all()
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87
        serializers = ObservacionSerializers(get_user, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
        # return Response({"message": "Error del servidor"}, status=status.HTTP_200_OK)
