from django.shortcuts import render
import request

def getTask(request):
    response = requests.get('http://10.184.65.74:9090/engine-rest/task')
    datos = response.json()
    return Response(datos)
