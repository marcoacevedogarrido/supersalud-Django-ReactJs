from django.contrib import admin

from .models import (Region, Provincia, Comuna, Tipo_Calle, Genero, Sexo, Nacionalidad, Aseguradora, 
Prestador, Cotizante, Afectado, Representante, Process_Definition, Instancia, Tipo_Reclamo,
Via_Tramitacion, Proceso, Materia, Sub_Materia, Historia_Proceso, Tarea, Plantillas_Tareas,
Plantilla, Estado_Plantilla, Observacion)

admin.site.register(Region)
admin.site.register(Provincia)
admin.site.register(Comuna)
admin.site.register(Tipo_Calle)
admin.site.register(Genero)
admin.site.register(Sexo)
admin.site.register(Nacionalidad)
admin.site.register(Aseguradora)
admin.site.register(Prestador)
admin.site.register(Cotizante)
admin.site.register(Afectado)
admin.site.register(Representante)
admin.site.register(Process_Definition)
admin.site.register(Instancia)
admin.site.register(Tipo_Reclamo)
admin.site.register(Via_Tramitacion)
admin.site.register(Proceso)
admin.site.register(Materia)
admin.site.register(Sub_Materia)
admin.site.register(Historia_Proceso)
admin.site.register(Tarea)
admin.site.register(Plantillas_Tareas)
admin.site.register(Plantilla)
admin.site.register(Estado_Plantilla)
admin.site.register(Observacion)
