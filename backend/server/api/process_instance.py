import os
from django.shortcuts import render
import requests
import json
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, viewsets, permissions
from server.models import Process_Instance, Datos_camunda
from rest_framework import status
from rest_framework.pagination import(
    LimitOffsetPagination,
    PageNumberPagination
)
from rest_framework import filters


class ProcessInstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Process_Instance
        fields = '__all__'


class ProcessInstanceStart(APIView):

    queryset = Process_Instance.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
        # CustomObjectPermissions
        
    ]

    def post(self, request, key):
        try:
            proceso = Datos_camunda.objects.get(key=key)
        except ObjectDoesNotExist:
            return Response(data="Proceso no existe", status=status.HTTP_404_NOT_FOUND)

        form_data =  {
            "variables": {
                "invoiceNumber": {"value":"invoice_1", "type": "string" },
                "amount" : {"value" : 30, "type": "integer"},
                "creditor" : {"value" : "Creditor 1", "type": "string"},
                "invoiceCategory" : {"value" : "Category 1", "type": "string"},
                "approverGroups" : {"value" : True, "type": "boolean"}
                    }
        }
        jsondata = json.dumps(form_data)
        print("Consultando Camunda...")
        url = "http://10.8.0.1:8089/engine-rest/process-definition/key/{}/start".format(key)
        consulta = requests.post(url, headers={'Content-Type': 'application/json'}, data=jsondata)
        if consulta.status_code == 200:
            body = json.loads(consulta.text)
            print("Creando instancia...")
            proceso = Process_Instance.objects.create(
                user = self.request.user,
                id_plano = body["id"],
                definitionId = body["definitionId"],
                businessKey = body["businessKey"],
                caseInstanceId = body["caseInstanceId"],
                ended = body["ended"],
                suspended = body["suspended"],
                tenantId = body["tenantId"],
            )
            serializer = ProcessInstanceSerializer(proceso)
            print("Instancia creada exitosamente")
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response( {message: "No existe el proceso {}".format(key)}, status=status.HTTP_404_NOT_FOUND) 
        return Response(data=body, status=status.HTTP_200_OK)




class ProcessInstanceVariables(APIView):

    queryset = Process_Instance.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
        # CustomObjectPermissions
        
    ]

    def get(self,request,pk):
        try:
            print("Iniciando consulta de variables para el proceso: {}".format(pk))
            url = "http://10.8.0.1:8089/engine-rest/process-instance/{}/variables".format(pk)
            consulta = requests.get(url)
            print(consulta.status_code)
            if consulta.status_code == 200:
                body = json.loads(consulta.text)
                return Response(data=body, status=status.HTTP_200_OK)
            else:
                return Response(data="{} no existe".format(pk), status=status.HTTP_404_NOT_FOUND)

        except:
            return Response({"message": "Instancia no definida"} , status=status.HTTP_200_OK)


# class LargeResultsSetPagination(PageNumberPagination):
#     page_size = 20
#     page_size_query_param = 'page_size'
#     max_page_size = 100

class InstanciaQuery(APIView):
    permission_classes = (permissions.AllowAny,)
    # pagination_class = LargeResultsSetPagination
    # search_fields = [
    #     'id',
    #     'nombre',
    #     'modelo__nombre',
    #     'fecha_creacion',
    #     'estado__nombre', 
    # ]
    # filter_backends = (filters.SearchFilter,)
    serializer_class = ProcessInstanceSerializer

    def get(self, format=None):
        usuario = self.request.user
        try:
            user_instances =  self.request.user.procesos_usuario.all()
            if user_instances:
                serializers = ProcessInstanceSerializer(user_instances, many=True)
                return Response(serializers.data, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Usuario no tiene instancias"}, status=status.HTTP_200_OK)
        except:
            return Response({"message": "Error del servidor"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
