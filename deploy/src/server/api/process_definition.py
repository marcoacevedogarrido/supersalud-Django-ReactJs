import os
from django.shortcuts import render
import requests
import json
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, viewsets, permissions
from server.models import Datos_Process_Definition, Datos_camunda, Process_Definition, Proceso
from rest_framework import status

from server.api.proceso import ProcesoSerializers


class ProcessInstanceSerializer(serializers.ModelSerializer):



    class Meta:
        model = Process_Definition
        fields = '__all__'


class ProcessDefinitionStart(APIView):

    queryset = Datos_Process_Definition.objects.all()
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
        url = "http://10.8.0.1:8089/engine-rest/process-definition/key/{}/start".format(key)
        consulta = requests.post(url, headers={'Content-Type': 'application/json'}, data=jsondata)
        body = json.loads(consulta.text)
        id_start = body["id"]
        for value in body:
            if value == 'links' or value == 'id':
                continue
            elif (value == 'id' or value == 'definitionId' or value == 'businessKey' or 
            value == 'caseInstanceId' or value == 'tenantId'):
                Datos_Process_Definition.objects.create(
                    nombre_variable = value,
                    tipo_variable = str,
                    valor_variable = body[value],
                    id_start = id_start,
                    user=self.request.user
                )
            else: 
                Datos_Process_Definition.objects.create(
                    nombre_variable = value,
                    tipo_variable = bool,
                    valor_variable = body[value],
                    id_start = id_start,
                    user=self.request.user
                )


        return Response(data=body, status=status.HTTP_200_OK)



class ProcessInstanceVariables(APIView):

    queryset = Datos_Process_Definition.objects.all()
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
            return Response(data="Instancia no definida")
