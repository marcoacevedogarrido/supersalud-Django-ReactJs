import os
from django.shortcuts import render
import requests
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, viewsets, permissions
from server.models import Datos_camunda
from rest_framework import status
from django.contrib.auth.models import User
from guardian.shortcuts import assign_perm
from server.permissions import CustomObjectPermissions


class DatosCamundaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datos_camunda
        fields = ['idDeployment',
                  'name',
                  'deploymentTime',
                  'key',
                 ]

# Create your views here.


class DeploymentView(APIView):
    queryset = Datos_camunda.objects.all()
    permission_classes = [
        permissions.IsAuthenticated,
        # CustomObjectPermissions
        
    ]
    # permission_classes = (permissions.AllowAny,)

    def post(self,request):
        print("Hola")
        deploymentName = request.data.get("deploymentName")
        enableDuplicateFiltering = request.data.get("enableDuplicateFiltering")
        deployChangedOnly = request.data.get("deployChangedOnly")
        bpmnFile = request.data.get("bpmnFile").read()
        jsFile = None
        print("User: ",self.request.user.has_perm('view_datos_camunda', Datos_camunda))
        

        # Variables necesarias para hacer el post
        # if deploymentName or enableDuplicateFiltering or deployChangedOnly or bpmnFile or jsFile:
        if not (deploymentName or enableDuplicateFiltering or deployChangedOnly or bpmnFile):
            return Response(data="Faltan variables",status=status.HTTP_404_NOT_FOUND)

        modulo = os.path.dirname(__file__)
        archivo = open(modulo+'/diagram_1.bpmn','rb')
        print("Archivo del sistema: ", archivo)
        form_data = {"deployment-name":deploymentName,
                     "enable-duplicate-filtering":enableDuplicateFiltering,
                     "deploy-changed-only":deployChangedOnly,
                     "pay_taxes.bpmn": bpmnFile,
                     }
        consulta = requests.post("http://10.8.0.1:8089/engine-rest/deployment/create", files=form_data)
        body = json.loads(consulta.text)
        bodyProcessDefinition = body['deployedProcessDefinitions']
        tmp = ''
        for key in bodyProcessDefinition:
            tmp = key
        lista= tmp.split(':')
        key = lista[0]
        dataCamu = Datos_camunda.objects.create(idDeployment=body["id"],
        name=body["name"],
        source=body["source"],
        deploymentTime=body["deploymentTime"],
        tenantId=body["tenantId"],
        deployedProcessDefinitions=body["deployedProcessDefinitions"],
        deployedCaseDefinitions=body["deployedCaseDefinitions"],
        deployedDecisionDefinitions=body["deployedDecisionDefinitions"],
        deployedDecisionRequirementsDefinitions=body["deployedDecisionRequirementsDefinitions"],
        key=key
        )
        camundaserializer = DatosCamundaSerializer(dataCamu)
        return Response(data=camundaserializer.data,status=status.HTTP_200_OK)

    def get(self, request):
        # Ver que 
        print("Prueba para permisos")
        datotofind = request.data.get("id")
        proceso = Datos_camunda.objects.get(id=datotofind)
        return Response(data="Hola mundo", status=status.HTTP_200_OK)