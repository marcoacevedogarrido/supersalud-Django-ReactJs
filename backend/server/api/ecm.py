import os
import sys
import traceback
import xml.etree.ElementTree as elementTree
from django.shortcuts import render
from django.conf import settings
import requests
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, viewsets
from server.models import Archivos_ECM
from rest_framework import status
import boto3
import re


# FUNCIONES PARA DSPACE
def loginDspace(dspaceUsr,dspacePwd):
    dspaceURL   = 'http://30.30.30.18'
    jsonLogin= {"email":dspaceUsr, "password":dspacePwd}
    urlLogin = dspaceURL+'/rest/login'
    response = requests.post(urlLogin, jsonLogin)
    if response.status_code==200:
        return response
    else:
        return "mensajeUsuarioNoEncontrado"
def getTagValueFromStringXml(tagValue, xml):
    try:
        tree = elementTree.ElementTree(elementTree.fromstring(xml))
        root = tree.getroot()
        value=""
        for l in root.findall(tagValue):
                value=l.text;
    except:
        return ""
    return value
def createBitStream(fileName, fileData, itemId, cookies):
    dspaceURL   = 'http://30.30.30.18'
    urlBitsStreams = dspaceURL+"/rest/items/"+itemId+"/bitstreams"+"?name="+fileName
    response       = requests.post(urlBitsStreams,data=fileData, cookies=cookies)
    if response.status_code == 200:
        newBitStream=getTagValueFromStringXml("UUID", response.text)
        print( 'LINK PARA DESCARGAR ARCHIVO: '+dspaceURL+'/rest/bitstreams/'+newBitStream+'/retrieve' )
        return newBitStream
    else:
        return ""
def crearItemId(folio):
    print("voy a crear el id",folio)
    ComunidadIF="ReclamosIF"
    dspaceURL   = 'http://30.30.30.18'
    response = requests.post(dspaceURL+":8000/Dspace/createItem", json={"communityName": ComunidadIF,"itemName":"Adjunto", "autor":"Sistema de reclamos", "descripcion":"Reclamo web", "titulo":"Reclamo_Folio".replace("Folio",folio)})
    return json.loads(response.text)['itemId']
def deleteBitstream(bitstreamId):
    dspaceURL   = 'http://30.30.30.18'
    print(' Eliminando expediente anterior: '+bitstreamId)
    response = requests.post(dspaceURL+':8000/Dspace/DeleteBitstream', json={"bitStreamId": bitstreamId})
    return json.loads(response.text)


class ECMFilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archivos_ECM
        fields = ['type', 'id_repositorio'
        ]


class ECMFiles(APIView):

    def post(self, request):
        repositorio = request.data.get("repositorio")
        proceso = request.data.get("proceso")
        folio = request.data.get("folio")
        if repositorio == 's3':
            return Response(data="hola mundo estoy en s3", status=status.HTTP_200_OK)

        elif repositorio == 'dspace':
            # try:
                login = loginDspace(settings.DSPACE_USR, settings.DSPACE_PWD)
                request_ds = requests.get("http://30.30.30.18/rest/items/399ea97e-37ea-4397-a2b7-acae7f27a4c1/bitstreams", cookies=login.cookies)
                data = json.loads(request_ds.content)
                # ACA ESTA EL NOMBRE DEL ARCHIVO:
                # for objects in data:
                #     print(objects['name'])
                # tree = elementTree.ElementTree(elementTree.fromstring(request_ds.content))
                # tree = elementTree.fromstring(request_ds.text)
                # print("algo")
                # root = tree.getroot()
                # print(root)
                return Response(data=data, status=status.HTTP_200_OK)
            # except
            #     return Response(data="No se pudo realizar la consulta", status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response(data="Repositorio no existente", status=status.HTTP_400_BAD_REQUEST)



    def delete(self,request):
        repositorio = request.data.get("repositorio")
        proceso = request.data.get("proceso")
        id_repositorio = request.data.get("id_repositorio")
        nombre_archivo = request.data.get("nombre_archivo")

        if repositorio == 's3':
            bucket_name = "apiuxtest"
            key = '{}/{}'.format(proceso, nombre_archivo)
            client_amazon = boto3.client('s3', aws_access_key_id=settings.AWS_ACCESS_KEY_ID, 
                                        aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY, 
                                        region_name='us-east-1'
                            )
            try:
                client_amazon.get_object(
                    Bucket=bucket_name,
                    Key=key
                )
                client_amazon.delete_object(
                    Bucket=bucket_name,
                    Key=key
                )
                return Response(data="Archivo eliminado correctamente", status=status.HTTP_200_OK)
            except:
                return Response(data="Archivo no existe", status=status.HTTP_200_OK)

        elif repositorio == 'dspace':
            try:
                deleteBitstream(id_repositorio)
                return Response(data="Archivo eliminado correctamente",
                                status=status.HTTP_200_OK
                )
            except:
                return Response(data="Ocurrio un error al intentar eliminar el archivo",
                                status=status.HTTP_400_BAD_REQUEST
                )
        else:
            return Response(data="Repositorio no existe",
                                status=status.HTTP_400_BAD_REQUEST
                )

class ECMAddFiles(APIView):

    def post(self, request):
        # d = request.headers['content-disposition']
        repositorio = request.data.get("repositorio")
        proceso = request.data.get("proceso")
        nombre_archivo = request.FILES['archivo'].name
        archivo = request.data.get("archivo").read()
        if repositorio == 's3':
            print("Es s3")
            client_amazon = boto3.client('s3', aws_access_key_id=settings.AWS_ACCESS_KEY_ID, 
                                        aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY, 
                                        region_name='us-east-1'
                            )
            ruta_archivo = '{}/{}'.format(proceso, nombre_archivo)
            bucket_name = "apiuxtest"
            request_amazon = client_amazon.put_object(Bucket=bucket_name, Body=archivo, Key=ruta_archivo)
            # body = request_amazon["ResponseMetadata"]
            # print(request_amazon)
            # http_header = body["HTTPHeaders"]
            # etag = str(http_header["etag"]).replace('"','')
            objarchivo = Archivos_ECM.objects.create(type=Archivos_ECM.TIPO_S3, 
                    id_repositorio=ruta_archivo,
                    proceso=proceso
                    )
            serializer = ECMFilesSerializer(objarchivo)
            return Response(data=serializer.data, status=status.HTTP_200_OK)



        elif repositorio == 'dspace':
            dspaceURL   = 'http://30.30.30.18'
            dspaceUsr   = 'jennerbevilacqua@gmail.com'
            dspacePwd   = 'walterius1'
            ComunidadIF="ReclamosIF"
            ComunidadIp="ReclamosIP"
            try:
                login=loginDspace(dspaceUsr,dspacePwd)
                folio = request.data.get("folio")
                #SI SE DESEA ADJUNTAR UN ARCHIVO AL RECLAMO, SE DEBE ENVIAR EL ITEMID GENERADO LA PRIMERA VEZ QUE SE CREO EL RECLAMO EN DSPACE
                itemId=crearItemId(folio)
                bitstream = createBitStream('adjunto.pdf', archivo, itemId, login.cookies)
                deleteBitstream(bitstream)
                objarchivo = Archivos_ECM.objects.create(type=Archivos_ECM.TIPO_S3, 
                        id_repositorio=bitstream,
                        proceso=proceso
                        )
                serializer = ECMFilesSerializer(objarchivo)
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            except Exception:
                xText = sys.exc_info()[1].args[0] + traceback.format_tb(sys.exc_info()[2])[0]
                print(xText)
                return Response(data=xText, status=status.HTTP_400_BAD_REQUEST)

        elif repositorio == 'alfresco':
            print("Es alfresco")

        else:
            print("Repositorio indicado no existe")


        return Response(data="Hola mundo", status=status.HTTP_200_OK)