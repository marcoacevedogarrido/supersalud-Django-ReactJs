from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from itertools import cycle


#####################################################
###################### usuario ######################

class Datos_camunda(models.Model):
    idDeployment = models.CharField(max_length=60, null=True, blank=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    source = models.CharField(max_length=50, null=True, blank=True)
    deploymentTime = models.DateTimeField(auto_now=False, auto_now_add=False)
    tenantId = models.IntegerField(null=True)
    deployedProcessDefinitions = models.CharField(max_length=60, null=True, blank=True)
    deployedCaseDefinitions = models.CharField(max_length=60, null=True, blank=True)
    deployedDecisionDefinitions = models.CharField(max_length=60, null=True, blank=True)
    deployedDecisionRequirementsDefinitions = models.CharField(max_length=60, null=True, blank=True)
    key = models.TextField(null=True)


class Process_Instance(models.Model):
    user = models.ForeignKey(User, related_name='procesos_usuario', on_delete=models.CASCADE, null=True)
    fecha_creacion = models.DateTimeField(auto_now = False, auto_now_add = True)
    id_plano = models.CharField(max_length=60, null=True)
    definitionId = models.CharField(max_length=60, null=True)
    businessKey = models.CharField(max_length=60, null=True)
    caseInstanceId = models.CharField(max_length=60, null=True)
    ended = models.BooleanField(default=False)
    suspended = models.BooleanField(default=False)
    tenantId = models.CharField(max_length=60, null=True)


    def __str__(self):
        return self.definitionId


# ----------------------------------------------

class Region(models.Model):
    codigo_region = models.CharField(max_length=200)
    region_ordinal = models.CharField(max_length=200, null=True)
    nombre = models.CharField(max_length=200)


    def __str__(self):
        return self.nombre
        

class Provincia(models.Model):
    region = models.ForeignKey(Region, related_name='provincias_region', on_delete=models.CASCADE)
    codigo_provincia = models.CharField(max_length=200)
    nombre = models.CharField(max_length=200)


    def __str__(self):
        return self.nombre


class Comuna(models.Model):
    region = models.ForeignKey(Region, on_delete=models.CASCADE, null=True)
    provincia = models.ForeignKey(Provincia, related_name='comunas_provincia', on_delete=models.CASCADE)
    codigo_comuna = models.CharField(max_length=200)
    nombre = models.CharField(max_length=200)


    def __str__(self):
        return self.nombre

<<<<<<< HEAD
class Genero(models.Model):
    descripcion = models.CharField(max_length=50, null=True, blank=True)
=======
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87

class Tipo_Calle(models.Model):
    tipo = models.CharField(max_length=50)


    def __str__(self):
        return self.tipo


class Sexo(models.Model):
    desc_sexo = models.CharField(max_length=50)


    def __str__(self):
        return self.desc_sexo


class Genero(models.Model):
    desc_genero = models.CharField(max_length=50)


    def __str__(self):
        return self.desc_genero

    
class Nacionalidad(models.Model):
    codigo = models.IntegerField(null=True)
    gentilicio = models.CharField(max_length=50, default="Chileno/a")
    nombre = models.CharField(max_length=50, default="Chile")


    def __str__(self):
        return self.nombre


class Tipo_Aseguradora(models.Model):
    nombre = models.CharField(max_length=50)


    def __str__(self):
        return self.nombre


class Aseguradora(models.Model):
    nombre_isapre = models.CharField(max_length=50, null=True)
    codigo_isapre = models.IntegerField(null=True)
    nombre_isapre_corto = models.CharField(max_length=50, null=True)
    # tipo_aseguradora = models.ForeignKey(Tipo_Aseguradora,
    #                                     related_name='aseguradoras',
    #                                     on_delete=models.CASCADE)


    def __str__(self):
        return self.nombre_isapre


class Representante(models.Model):
    rut = models.IntegerField(null=True, blank=True)
    dv = models.CharField(max_length=50, null=True, blank=True)
    nombres = models.CharField(max_length=50, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True)
    apellido_materno = models.CharField(max_length=50, null=True, blank=True)
    nacionalidad = models.ForeignKey(Nacionalidad,
                                    related_name="representantes_nacionalidad",
                                    on_delete=models.CASCADE)
    genero = models.ForeignKey(Genero,
                                    related_name="representantes_genero",
                                    on_delete=models.CASCADE)
    sexo = models.ForeignKey(Sexo,
                                    related_name="representantes_sexo",
                                    on_delete=models.CASCADE)
    fecha_nacimiento = models.DateField()
    aseguradora = models.ForeignKey(Aseguradora,
                                    related_name="representantes_aseguradora",
                                    on_delete=models.CASCADE)
    telefono_contacto_uno = models.CharField(max_length=50, null=True, blank=True)
    telefono_contacto_dos = models.CharField(max_length=50, null=True, blank=True)
    correo_electronico = models.CharField(max_length=50, null=True, blank=True)
    region = models.ForeignKey(Region,
                                    related_name="representantes_region",
                                    on_delete=models.CASCADE)
    provincia = models.ForeignKey(Provincia,
                                    related_name="representantes_privincia",
                                    on_delete=models.CASCADE)
    comuna = models.ForeignKey(Comuna,
                                    related_name="representantes_comuna",
                                    on_delete=models.CASCADE) 
    direccion_nombre_calle = models.CharField(max_length=50, null=True, blank=True)
    direccion_numero_calle = models.CharField(max_length=50, null=True, blank=True)
    direccion_departamento = models.CharField(max_length=50, null=True, blank=True)


    def __str__(self):
        return str(self.rut)


class Afectado(models.Model):
    rut = models.IntegerField(null=True, blank=True)
    dv = models.CharField(max_length=50, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True)
    apellido_materno = models.CharField(max_length=50, null=True, blank=True)
    genero = models.ForeignKey(Genero, related_name='afectados', on_delete=models.CASCADE)
    sexo = models.ForeignKey(Sexo, related_name='afectados', on_delete=models.CASCADE)
    fecha_nacimiento = models.DateField()
    edad = models.IntegerField(null=True)
    nombre = models.CharField(max_length=50, null=True)
    tipo_pac = models.BooleanField(null=True)
    fallece_pac = models.BooleanField(null=True)

    def __str__(self):
        return str(self.id)


class Cotizante(models.Model):
    rut = models.IntegerField(null=True, blank=True)
    dv = models.CharField(max_length=50, null=True, blank=True)
    nombres = models.CharField(max_length=50, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True)
    apellido_materno = models.CharField(max_length=50, null=True, blank=True)
    nacionalidad = models.ForeignKey(Nacionalidad,
                                    related_name="cotizantes_nacionalidad",
                                    on_delete=models.CASCADE)
    genero = models.ForeignKey(Genero,
                                    related_name="cotizantes_genero",
                                    on_delete=models.CASCADE)
    sexo = models.ForeignKey(Sexo,
                                    related_name="cotizantes_sexo",
                                    on_delete=models.CASCADE)
    fecha_nacimiento = models.DateField()
    aseguradora = models.ForeignKey(Aseguradora,
                                    related_name="cotizantes_aseguradora",
                                    on_delete=models.CASCADE)
    telefono_contacto_uno = models.CharField(max_length=50, null=True, blank=True)
    telefono_contacto_dos = models.CharField(max_length=50, null=True, blank=True)
    correo_electronico = models.CharField(max_length=50, null=True, blank=True)
    region = models.ForeignKey(Region,
                                    related_name="cotizantes_region",
                                    on_delete=models.CASCADE)
    provincia = models.ForeignKey(Provincia,
                                    related_name="cotizantes_provincia",
                                    on_delete=models.CASCADE)
    comuna = models.ForeignKey(Comuna,
                                    related_name="cotizantes_comuna",
                                    on_delete=models.CASCADE) 
    direccion_nombre_calle = models.CharField(max_length=50, null=True, blank=True)
    direccion_numero_calle = models.CharField(max_length=50, null=True, blank=True)
    direccion_departamento = models.CharField(max_length=50, null=True, blank=True)


    def __str__(self):
        return self.nombres


class Prestador(models.Model):
    nombre = models.CharField(max_length=50)
    region = models.ForeignKey(Region,
                                    related_name="prestadores_region",
                                    on_delete=models.CASCADE)
    provincia = models.ForeignKey(Provincia,
                                    related_name="prestadores_provincia",
                                    on_delete=models.CASCADE)
    comuna = models.ForeignKey(Comuna,
                                    related_name="prestadores_comuna",
                                    on_delete=models.CASCADE) 


    def __str__(self):
        return self.nombre

                                    
class Process_Definition(models.Model):
    id_camunda = models.CharField(max_length=100)
    key = models.CharField(max_length=50, null=True, blank=True)
    category = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=50, null=True, blank=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    version = models.IntegerField(null=True, blank=True)
    resource = models.CharField(max_length=50, null=True, blank=True)
    deploymentId = models.CharField(max_length=50, null=True, blank=True)
    diagram = models.CharField(max_length=50, null=True, blank=True)
    suspended = models.CharField(max_length=50, null=True, blank=True)
    tenantId = models.CharField(max_length=50, null=True, blank=True)
    versionTag = models.CharField(max_length=50, null=True, blank=True)
    historyTimeToLive = models.CharField(max_length=50, null=True, blank=True)
    startableInTasklist = models.CharField(max_length=50, null=True, blank=True)


    def __str__(self):
        return self.id_camunda


class Proceso(models.Model):
    nombre = models.CharField(max_length=50, null=True, blank=True)
    descripcion = models.TextField()
    process_definition = models.OneToOneField(Process_Definition,
                                            related_name='proceso_process_definition',
                                            on_delete=models.CASCADE)
    

    def __str__(self):
        return self.nombre


class Via_Tramitacion(models.Model):
    proceso = models.ForeignKey(Proceso, related_name='via_tramitacion_proceso', on_delete=models.CASCADE)
    tipo = models.CharField(max_length=50, null=True, blank=True)


    def __str__(self):
<<<<<<< HEAD
        return str(self.usuario + ' ' + self.fecha)


class SexoPaciente(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class SexoReclamante(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class SexoRepresentante(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class GeneroPaciente(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class GeneroReclamante(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class GeneroRepresentante(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class NacionalidadRepresentante(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class RegionReclamante(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class ComunaRepresentante(models.Model):
    descripcion      = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class Representante(models.Model):
    comunarep        = models.OneToOneField('server.ComunaRepresentante', on_delete=models.CASCADE, default=None, null=True, blank=True, related_name='representantes')
    direccion        = models.OneToOneField('server.Direccion', on_delete=models.CASCADE, default=None, null=True, blank=True, related_name='representantes', help_text='Direccion de Afectado')
    reclamante       = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='representantes')
    nombre           = models.CharField(max_length=50, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True)
    apellido_materno = models.CharField(max_length=50, null=True, blank=True)
    rut              = models.IntegerField(null=True, blank=True)
    genero           = models.OneToOneField(Genero, on_delete=models.CASCADE,  null=True, blank=True)
    descripcion      = models.TextField(default=True)
    fecha_nac        = models.DateField(auto_now=False, auto_now_add=False, null=True, blank=True)
    copia_ced_rep    = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    email            = models.EmailField(null=True, blank=True)
    edad             = models.IntegerField(null=True, blank=True)
    telefono1        = models.IntegerField(null=True, blank=True)
    telefono2        = models.IntegerField(null=True, blank=True)
    region           = models.ForeignKey('server.Region', on_delete=models.CASCADE, default=True, related_name='representantes')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class Reclamante(models.Model):
    nacionalidad     = models.ManyToManyField('server.Nacionalidad', default=True, related_name='reclamantes', help_text='Nacionalidad de Reclamante')
    profesion        = models.ManyToManyField('server.Profesion', default=True, related_name='reclamantes', help_text='Profesion de Reclamante')
    direccion        = models.OneToOneField('server.Direccion', on_delete=models.CASCADE, default=True, related_name='reclamantes', help_text='Direccion de Reclamante')
    historial        = models.OneToOneField(Historial, on_delete=models.CASCADE, null=True, blank=True, help_text='Historial de Reclamante')
    genero           = models.OneToOneField(Genero, on_delete=models.CASCADE,  null=True, blank=True, help_text='Genero de Reclamante')
    estado_civil     = models.OneToOneField(Estado_civil, on_delete=models.CASCADE,  null=True, blank=True, help_text='Estado Civil de Reclamante')
    sexo             = models.OneToOneField(Sexo, on_delete=models.CASCADE,  null=True, blank=True, help_text='Sexo de Reclamante')
    region           = models.ForeignKey('server.Region', on_delete=models.CASCADE, default=True, related_name='reclamantes', help_text='Region de Reclamante')
    provincia        = models.ForeignKey('server.Provincia', on_delete=models.CASCADE, default=True, related_name='reclamantes', help_text='Provincia de Reclamante')
    comuna           = models.ForeignKey('server.Comuna', on_delete=models.CASCADE, default=True, related_name='reclamantes', help_text='Comuna de Reclamante')
    afectado         = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='reclamantes', help_text='Afectado asociado a Reclamante')
    documento        = models.ForeignKey('server.Documento', on_delete=models.CASCADE, default=True, related_name='reclamantes', help_text='Documento Reclamante')

    nombre           = models.CharField(max_length=50, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True)
    apellido_materno = models.CharField(max_length=50, null=True, blank=True)
    fecha_nac        = models.DateField(auto_now=False, auto_now_add=False)
    telefono1        = models.IntegerField(null=True, blank=True)
    telefono2        = models.IntegerField(null=True, blank=True)
    rut              = models.IntegerField(null=True, blank=True)
    digitoverificador= models.IntegerField(null=True, blank=True)
    email            = models.EmailField(null=True, blank=True)
    edad             = models.IntegerField(null=True, blank=True)
    pdf_cedula       = models.FileField(upload_to='Escritorio/', null=True, blank=True)
=======
        return self.tipo

    
class Tipo_Reclamo(models.Model):
    proceso = models.ForeignKey(Proceso, related_name='tipo_reclamos_proceso', on_delete=models.CASCADE)
    tipo = models.CharField(max_length=50, null=True, blank=True)
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87


    def __str__(self):
        return self.tipo

class Tarea(models.Model):
    proceso = models.ForeignKey(Proceso, related_name='tareas_proceso', on_delete=models.CASCADE)
    nombre = models.CharField(max_length=50, null=True, blank=True)
    sla_dias = models.IntegerField(null=True, blank=True)

<<<<<<< HEAD
class Afectado(models.Model):
    nacionalidad     = models.ManyToManyField('server.Nacionalidad', default=True, related_name='afectados', help_text='Nacionalidad de Afectado')
    direccion        = models.OneToOneField('server.Direccion', on_delete=models.CASCADE, default=None, null=True, blank=True, related_name='afectados', help_text='Direccion de Afectado')
    estado_civil     = models.OneToOneField(Estado_civil, on_delete=models.CASCADE,  null=True, blank=True, help_text='Estado Civil de Afectado')
    genero           = models.OneToOneField(Genero, on_delete=models.CASCADE,  null=True, blank=True, help_text='Genero de Afectado')
    sexo             = models.OneToOneField(Sexo, on_delete=models.CASCADE,  null=True, blank=True, help_text='Sexo de Afectado')
    region           = models.ForeignKey('server.Region', on_delete=models.CASCADE, default=True, related_name='afectados', help_text='Region de Afectado')
    provincia        = models.ForeignKey('server.Provincia', on_delete=models.CASCADE, default=True, related_name='afectados', help_text='Provincia de Afectado')
    comuna           = models.ForeignKey('server.Comuna', on_delete=models.CASCADE, default=True, related_name='afectados', help_text='Comuna de Afectado')

    nombre           = models.CharField(max_length=50, null=True, blank=True, help_text='Nombre de Afectado')
    apellido_materno = models.CharField(max_length=50, null=True, blank=True, help_text='Apellido Materno de Afectado')
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True, help_text='Apellido Paterno de Afectado')
    fecha_nac        = models.DateField(auto_now=False, auto_now_add=False, help_text='Fecha de Nacimiento de Afectado')
    rut              = models.IntegerField(help_text='Rut de Afectado')
    telefono1        = models.IntegerField(help_text='Telefono Primario de Afectado')
    telefono2        = models.IntegerField(help_text='Telefono Segundario de Afectado')
    email            = models.EmailField(null=True, blank=True)
    edad             = models.IntegerField(null=True, blank=True)
    fallece          = models.BooleanField(null=True, blank=True)
    digitoverificador= models.IntegerField(null=True, blank=True)
    tipo_pac         = models.CharField(max_length=50, null=True, blank=True)



    class Meta:
        ordering = ['id']
=======
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87

    def __str__(self):
        return self.nombre


class Historia_Proceso(models.Model):
    tarea = models.ForeignKey(Tarea, related_name='historia_procesos_tarea', on_delete=models.CASCADE)
    usuario_responsable = models.ForeignKey(User,
                                            related_name='historia_procesos_usuario_responsable',
                                            on_delete=models.CASCADE)
    fecha_inicio = models.DateField()
    fecha_termino = models.DateField()
    dias_corridos = models.IntegerField()
    dias_habiles = models.IntegerField()


    def __str__(self):
        return self.tarea.nombre


class Estado_Plantilla(models.Model):
    nombre = models.CharField(max_length=50, null=True, blank=True)


    def __str__(self):
        return self.nombre


class Plantilla(models.Model):
    nombre = models.CharField(max_length=50, null=True, blank=True)
    filename = models.CharField(max_length=50, null=True, blank=True)
    descripcion = models.CharField(max_length=50, null=True, blank=True)
    version = models.CharField(max_length=50, null=True, blank=True)
    estado = models.ForeignKey(Estado_Plantilla, related_name='plantillas_estado', on_delete=models.CASCADE)


    def __str__(self):
        return self.nombre


class Plantillas_Tareas(models.Model):
    tarea = models.ForeignKey(Tarea, related_name='plantillas_tareas', on_delete=models.CASCADE)
    plantilla = models.ForeignKey(Plantilla, related_name='plantillas', on_delete=models.CASCADE)
    

    def __str__(self):
        return self.plantilla.nombre + self.tarea.nombre
        

class Materia(models.Model):
    proceso = models.ForeignKey(Proceso, related_name='materias_proceso', on_delete=models.CASCADE)
    descripcion = models.CharField(max_length=50, null=True, blank=True)


    def __str__(self):
        return self.descripcion


class Sub_Materia(models.Model):
    materia = models.ForeignKey(Materia, related_name='sub_materias', on_delete=models.CASCADE)
    descripcion = models.CharField(max_length=50, null=True, blank=True)


    def __str__(self):
        return self.descripcion


<<<<<<< HEAD
class Reclamo(models.Model):
    aseguradora          = models.ForeignKey('server.Aseguradora', on_delete=models.CASCADE, default=True, null=True, blank=True, related_name='reclamos')
    representante        = models.ForeignKey('server.Representante', on_delete=models.CASCADE, default=True, null=True, blank=True, related_name='reclamos')
    nacionalidad         = models.ForeignKey('server.Nacionalidad', on_delete=models.CASCADE, default=True, null=True, blank=True, related_name='reclamos')
    comuna               = models.ForeignKey('server.Comuna', on_delete=models.CASCADE, default=True, null=True, blank=True, related_name='reclamos')
    submateria           = models.ForeignKey('server.Submateria', on_delete=models.CASCADE, default=True, null=True, blank=True, related_name='reclamos')
    reclamante           = models.OneToOneField(Reclamante, on_delete=models.CASCADE, default=True, related_name='reclamos')
    genero               = models.OneToOneField(Genero, on_delete=models.CASCADE, default=True, related_name='reclamos')
    afectado             = models.OneToOneField(Afectado, on_delete=models.CASCADE, default=True, related_name='reclamos')
    region               = models.OneToOneField(Region, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    direccion            = models.OneToOneField(Direccion, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    materia              = models.OneToOneField(Materia, on_delete=models.CASCADE, default=True, related_name='reclamos')
    tipo_reclamo         = models.OneToOneField(Tipo_reclamo, on_delete=models.CASCADE, default=True, related_name='reclamos')
    generorepresentante  = models.OneToOneField(GeneroRepresentante, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    generopaciente       = models.OneToOneField(GeneroPaciente, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    sexopaciente         = models.OneToOneField(SexoPaciente, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    sexoreclamante       = models.OneToOneField(SexoReclamante, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    sexorepresentante    = models.OneToOneField(SexoRepresentante, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    generorecclamante    = models.OneToOneField(GeneroReclamante, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    nacionalidadrep      = models.OneToOneField(NacionalidadRepresentante, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    comunarep            = models.OneToOneField(ComunaRepresentante, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')
    regionrec            = models.OneToOneField(RegionReclamante, on_delete=models.CASCADE, default=True, null=True, blank=True ,related_name='reclamos')


    # reparo               = models.ForeignKey('server.Reparo', on_delete=models.CASCADE, default=True, null=True, blank=True, related_name='reclamos')
    # intendencia          = models.OneToOneField(Intendencia, on_delete=models.CASCADE, default=True, related_name='reclamos')
    # prestador            = models.OneToOneField(Prestador, on_delete=models.CASCADE, default=True, related_name='reclamos')

    fecha_presentacion   = models.DateField(auto_now=False, auto_now_add=False)
    fecha_cierre         = models.DateField(auto_now=False, auto_now_add=False)
    sub_materia1         = models.IntegerField(null=True, blank=True)
    sub_materia2         = models.IntegerField(null=True, blank=True)
    sub_materia3         = models.IntegerField(null=True, blank=True)
    tipo_beneficiario    = models.BooleanField(null=True, blank=True)
    folio                = models.IntegerField(null=True, blank=True)
    desc_problema = models.TextField(default=True)
    solucion_esperada    = models.TextField(default=True)
    lugar_uno            = models.CharField(max_length=50, null=True, blank=True)
    notificar_tramite_id = models.BooleanField(null=True, blank=True)
    pdf_dec_jur          = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    archivo_adj_cuatro   = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    pdf_poder_simple_her = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    pdf_unico            = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    pdf_cer_def          = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    archivo_adj_dos      = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    archivo_adj_tres     = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    pdf_poder_simple_rep = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    archivo_adj_uno      = models.FileField(upload_to='Escritorio/', null=True, blank=True)
    pdf_cer_nac_her      = models.FileField(upload_to='Escritorio/', null=True, blank=True)

    complaint_id         = models.IntegerField(null=True, blank=True)
    hasta_dos            = models.CharField(max_length=50, null=True, blank=True)
    hasta_tres           = models.CharField(max_length=50, null=True, blank=True)
    hasta_uno            = models.CharField(max_length=50, null=True, blank=True)
    desde_uno            = models.CharField(max_length=50, null=True, blank=True)
    desde_dos            = models.CharField(max_length=50, null=True, blank=True)
    desde_tres           = models.CharField(max_length=50, null=True, blank=True)
    lugar_tres           = models.CharField(max_length=50, null=True, blank=True)
    lugar_dos            = models.CharField(max_length=50, null=True, blank=True)
    hecho_mes            = models.IntegerField(null=True, blank=True)
    triage               = models.IntegerField(null=True, blank=True)
    hospitalizacion      = models.IntegerField(null=True, blank=True)
    hecho_ano            = models.CharField(max_length=50, null=True, blank=True)
    tipo_reclamo         = models.CharField(max_length=50, null=True, blank=True)
    categoria_clasificador= models.CharField(max_length=50, null=True, blank=True)


    class Meta:
        ordering = ['id']
=======
class Tipo_Prioridad(models.Model):
    codigo = models.IntegerField()
    descripcion = models.CharField(max_length=50)
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87

    def __str__(self):
        return self.descripcion


class Instancia(models.Model):
    # reclamante
    origen_reclamo = models.CharField(max_length=50, null=True)
    original_json = models.TextField(null=True)
    complaintId = models.CharField(max_length=50, null=True)
    n_reclamo = models.CharField(max_length=100)
    cotizante = models.ForeignKey(Cotizante, related_name='instancias_cotizante', on_delete=models.CASCADE)
    afectado = models.ForeignKey(Afectado, related_name='instancias_afectado', on_delete=models.CASCADE, null=True)
    representante = models.ForeignKey(Representante, related_name='instancias_representante', on_delete=models.CASCADE, null=True)
    aseguradora = models.ForeignKey(Aseguradora, related_name='instancias_aseguradora', on_delete=models.CASCADE)
    prestador = models.ForeignKey(Prestador, related_name='instancias_prestador', on_delete=models.CASCADE)
    region = models.ForeignKey(Region,
                                    related_name="instancias_region",
                                    on_delete=models.CASCADE)
    provincia = models.ForeignKey(Provincia,
                                    related_name="instancias_provincia",
                                    on_delete=models.CASCADE)
    comuna = models.ForeignKey(Comuna,
                                    related_name="instancias_comuna",
                                    on_delete=models.CASCADE) 
    process_definition = models.ForeignKey(Process_Definition,
                                                related_name="instancia_process_definition",
                                                on_delete=models.CASCADE)
    descripcion_problema = models.TextField()
    explicacion = models.TextField()
    es_reclamante_y_afectado = models.BooleanField(default=False)
    notificacion_electronica = models.BooleanField(default=False)
    correo_electronico_notificacion = models.CharField(max_length=50, null=True, blank=True)
    comentarios = models.CharField(max_length=50, null=True, blank=True)
    materia = models.ForeignKey(Materia,
                                    related_name="instancias_materia",
                                    on_delete=models.CASCADE) 
    sub_materia = models.ForeignKey(Sub_Materia,
                                    related_name="instancias_sub_materia",
                                    on_delete=models.CASCADE)
    fecha_limite = models.DateField()
    folio = models.CharField(max_length=50, null=True, blank=True)     
    triage = models.ForeignKey(Tipo_Prioridad, 
                                related_name="instancias_prioridad", 
                                on_delete=models.CASCADE, null=True)
    canal_ingreso = models.CharField(max_length=50, null=True, blank=True)
    fecha_reclamo_prestador = models.DateField()
    fecha_carta_respuesta = models.DateField()
    fecha_limite_respuesta_prestador = models.DateField()
    fecha_inicio_para_prestar_reclamo = models.DateField()
    fecha_fin_para_prestar_reclamo = models.DateField()
    tipo_reclamo = models.ForeignKey(Tipo_Reclamo,
                                    related_name="instancias_tipo_reclamo",
                                    on_delete=models.CASCADE)
    fecha_desde = models.DateField()
    fecha_hasta = models.DateField()
    

    def __str__(self):
        return str(self.process_definition.id_camunda)

<<<<<<< HEAD



#####################################################
###################### usuario ######################

class Datos_camunda(models.Model):
    idDeployment = models.CharField(max_length=60, null=True, blank=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    source = models.CharField(max_length=50, null=True, blank=True)
    deploymentTime = models.DateTimeField(auto_now=False, auto_now_add=False)
    tenantId = models.IntegerField(null=True)
    deployedProcessDefinitions = models.CharField(max_length=60, null=True, blank=True)
    deployedCaseDefinitions = models.CharField(max_length=60, null=True, blank=True)
    deployedDecisionDefinitions = models.CharField(max_length=60, null=True, blank=True)
    deployedDecisionRequirementsDefinitions = models.CharField(max_length=60, null=True, blank=True)
    key = models.TextField(null=True)


class Process_Instance(models.Model):
    user = models.ForeignKey(User, related_name='procesos_usuario', on_delete=models.CASCADE, null=True)
    fecha_creacion = models.DateTimeField(auto_now = False, auto_now_add = True)
    id_plano = models.CharField(max_length=60, null=True)
    definitionId = models.CharField(max_length=60, null=True)
    businessKey = models.CharField(max_length=60, null=True)
    caseInstanceId = models.CharField(max_length=60, null=True)
    ended = models.BooleanField(default=False)
    suspended = models.BooleanField(default=False)
    tenantId = models.CharField(max_length=60, null=True)


    def __str__(self):
        return self.definitionId


class Observacion(models.Model):
    user = models.ForeignKey(User, related_name='observaciones', on_delete=models.CASCADE, null=True)
    process_instance = models.ForeignKey(Process_Instance, related_name="observaciones", on_delete=models.CASCADE)
    texto = models.TextField()
    fecha_observacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.texto


class Datos_Process_Definition(models.Model):
    instancia_proceso = models.ForeignKey(Process_Instance, related_name='instancia_proceso', on_delete=models.CASCADE, null=True)
    nombre_variable = models.CharField(max_length=60, null=True, blank=True)
    tipo_variable = models.CharField(max_length=60, null=True, blank=True)
    valor_variable = models.CharField(max_length=60, null=True, blank=True)
    id_start = models.CharField(max_length=60, null=True, blank=True)

=======

class Observacion(models.Model):
    reclamo = models.ForeignKey(Instancia, related_name='observaciones_reclamo', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='observaciones_user', on_delete=models.CASCADE, null=True, blank=True)
    tarea = models.ForeignKey(Tarea, related_name='observaciones_tarea', on_delete=models.CASCADE)
    descripcion = models.CharField(max_length=50, null=True, blank=True)
    fecha = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.descripcion
>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87


class Archivos_ECM(models.Model):
    proceso = models.CharField(max_length=50, null=True)
    TIPO_S3 = 's3'
    TIPO_ALFRESCO = 'alfresco'
    TIPO_DSPACE = 'dspace'
    TIPOS = (
        (TIPO_S3, 'S3'),
        (TIPO_ALFRESCO, 'Alfresco'),
        (TIPO_DSPACE, 'Dspace'),
    )
    type = models.CharField(
        max_length=20,
        choices=TIPOS,
    )
    link_descarga = models.URLField(
        null=True, blank=True
    )
    id_repositorio = models.CharField(
        max_length=40, null=True, blank=True
    )

    def clean(self) -> None:
        if (self.type == Archivos_ECM.TIPO_ALFRESCO or self.type == Archivos_ECM.TIPO_DSPACE or self.type == Archivos_ECM.TIPO_S3):
            if self.id_repositorio is None:
                raise ValidationError(
                    'Debe tener un id de repositorio'
            )
        else:
            assert False, f'Tipo de repositorio desconocido "{self.type}"'
<<<<<<< HEAD
=======


class Datos_Process_Definition(models.Model):
    instancia_proceso = models.ForeignKey(Process_Instance, related_name='instancia_proceso', on_delete=models.CASCADE, null=True)
    nombre_variable = models.CharField(max_length=60, null=True, blank=True)
    tipo_variable = models.CharField(max_length=60, null=True, blank=True)
    valor_variable = models.CharField(max_length=60, null=True, blank=True)
    id_start = models.CharField(max_length=60, null=True, blank=True)





>>>>>>> 3fde20e01f03e1d83927bca96187882feff60d87
