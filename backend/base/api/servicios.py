from rest_framework import serializers, viewsets
from base.models import ServicioTask

class ServicioTaskSerializer(serializers.ModelSerializer):
    task = serializers.SerializerMethodField()

    class Meta:
        model = ServicioTask
        fields = ['id', 'task']

    def get_task(slf, obj):
        response = obj.requests.get('http://10.184.65.74:9090/engine-rest/task')
        datos = response.json()
        return Response(datos)

class ServicioTaskView(viewsets.ModelViewSet):
    queryset = ServicioTask.objects.all()
    serializer_class = ServicioTaskSerializer
