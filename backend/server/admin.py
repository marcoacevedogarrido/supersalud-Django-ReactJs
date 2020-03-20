from django.contrib import admin


from .models import Usuario, UserProfile, Grupo, Tipo_usuario, Usuario_grupo \
                        , Grupo_permiso, Reclamante, Profesion, Documento \
                        , Documento_plantilla, Genero, Nacionalidad, Sexo \
                        , Provincia, Afectado, Comuna, Region, Estado_civil \
                        , Direccion, Historial, Tipo_aseguradora, Aseguradora \
                        , Reclamo, Tipo_reclamo, Reclamo_reclamante, Prestador \
                        , Tipo_prestador, Reparo, Intendencia, Materia \
                        , Submateria

admin.site.register(Usuario)
admin.site.register(UserProfile)
admin.site.register(Grupo)
admin.site.register(Tipo_usuario)
admin.site.register(Usuario_grupo)
admin.site.register(Grupo_permiso)
admin.site.register(Reclamante)
admin.site.register(Profesion)
admin.site.register(Documento)
admin.site.register(Documento_plantilla)
admin.site.register(Genero)
admin.site.register(Nacionalidad)
admin.site.register(Sexo)
admin.site.register(Provincia)
admin.site.register(Afectado)
admin.site.register(Comuna)
admin.site.register(Region)
admin.site.register(Estado_civil)
admin.site.register(Direccion)
admin.site.register(Historial)
admin.site.register(Tipo_aseguradora)
admin.site.register(Aseguradora)
admin.site.register(Reclamo)
admin.site.register(Tipo_reclamo)
admin.site.register(Reclamo_reclamante)
admin.site.register(Prestador)
admin.site.register(Tipo_prestador)
admin.site.register(Reparo)
admin.site.register(Intendencia)
admin.site.register(Materia)
admin.site.register(Submateria)
