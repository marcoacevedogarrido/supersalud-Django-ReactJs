from django.contrib import admin

<<<<<<< HEAD
from .models import Reclamante, Profesion, Documento, \
    Documento_plantilla, Nacionalidad, Sexo, Provincia, \
    Afectado, Comuna, Region, Estado_civil, Direccion, Historial, \
    Tipo_aseguradora, Aseguradora, Reclamo, Tipo_reclamo, \
    Reclamo_reclamante, Prestador, Tipo_prestador, Reparo, Intendencia, \
    Materia, Submateria, Representante, Process_Instance, Observacion
=======
from .models import (Region, Provincia, Comuna, Tipo_Calle, Genero, Sexo, Nacionalidad, Aseguradora, 
Prestador, Cotizante, Afectado, Representante, Process_Definition, Instancia, Tipo_Reclamo,
Via_Tramitacion, Proceso, Materia, Sub_Materia, Historia_Proceso, Tarea, Plantillas_Tareas,
Plantilla, Estado_Plantilla, Observacion)
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87

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
<<<<<<< HEAD
admin.site.register(Submateria)
admin.site.register(Representante)
admin.site.register(Process_Instance)
# ACCIONES INSTANCIAS
=======
admin.site.register(Sub_Materia)
admin.site.register(Historia_Proceso)
admin.site.register(Tarea)
admin.site.register(Plantillas_Tareas)
admin.site.register(Plantilla)
admin.site.register(Estado_Plantilla)
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87
admin.site.register(Observacion)
