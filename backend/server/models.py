from django.db import models
from django.contrib.auth.models import User


class Usuario(models.Model):
    grupo = models.ForeignKey('server.Grupo', on_delete=models.CASCADE, default=True, related_name='usuarios')
    tipo_usuario = models.ForeignKey('server.Tipo_usuario', on_delete=models.CASCADE, default=True, related_name='usuarios')
    grupo_permiso = models.ForeignKey('server.Grupo_permiso', on_delete=models.CASCADE, default=True, related_name='usuarios')
    usuario_grupo = models.ForeignKey('server.Usuario_grupo', on_delete=models.CASCADE, default=True, related_name='usuarios')

    nombre = models.CharField(max_length=30, null=True, blank=True, help_text='Nombre del Usuario')
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True, help_text='Apellido Paterno del Usuario')
    apellido_materno = models.CharField(max_length=50, null=True, blank=True, help_text='Apellido Materno del Usuario')
    rut = models.IntegerField(help_text='Rut del Usuario')
    direccion = models.CharField(max_length=50, null=True, blank=True, help_text='Direccion del Usuario')
    telefono = models.IntegerField(help_text='Numero Telefonico del Usuario')
    correo_electronico = models.EmailField(max_length=50, help_text='Correo Electronico del Usuario')
    fecha_nac = models.DateField(auto_now=False, auto_now_add=False, help_text='Fecha de Nacimiento del Usuario')
    comuna = models.CharField(max_length=50, null=True, blank=True, help_text='Comuna del Usuario')
    rol = models.IntegerField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.nombre + ' ' + self.apellido_paterno + ' ' + self.apellido_materno)

class UserProfile(models.Model):
    usuario = models.ForeignKey(Usuario, blank=True, null=True, on_delete=models.CASCADE, verbose_name=u'Usuario')
    usuario.contribute_to_class(User, 'usuario')
    user= models.OneToOneField(User, on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.usuario)

class Grupo(models.Model):
    grupo_permiso = models.ForeignKey('server.Grupo_permiso', on_delete=models.CASCADE, default=True, related_name='grupos')
    usuario_grupo = models.ForeignKey('server.Usuario_grupo', on_delete=models.CASCADE, default=True, related_name='grupos')

    admisibilidad_if = models.IntegerField()
    admisibilidad_ip = models.IntegerField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)

class Grupo_permiso(models.Model):
    usuario_grupo = models.ForeignKey('server.Usuario_grupo', on_delete=models.CASCADE, default=True, related_name='grupos_permisos')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)

class Usuario_grupo(models.Model):
    admisibilidad_if = models.IntegerField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.admisibilidad_if)


class Tipo_usuario(models.Model):

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)

class Reclamante(models.Model):
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='reclamantes')
    documento = models.ForeignKey('server.Documento', on_delete=models.CASCADE, default=True, related_name='reclamantes')
    nacionalidad = models.ForeignKey('server.Nacionalidad', on_delete=models.CASCADE, default=True, related_name='reclamantes', help_text='Nacionalidad del Cotizante')

    nombre = models.CharField(max_length=50, null=True, blank=True, help_text='Nombre del Reclamante')
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True, help_text='Apellido Paterno del Reclamante')
    apellido_materno = models.CharField(max_length=50, null=True, blank=True, help_text='Apellido Materno del Reclamante')
    fecha_nac = models.DateField(auto_now=False, auto_now_add=False, help_text='Fecha de Nacimiento del Reclamante')
    nacionalidad = models.IntegerField(help_text='Nacionalidad del Reclamante')
    telefono1 = models.IntegerField(help_text='Telefono de Reclamante')
    telefono2 = models.IntegerField(help_text='Telefono Segundario de Reclamante')
    rut = models.IntegerField(help_text='Rut del Reclamante')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.nombre + ' ' + self.apellido_paterno + ' ' + self.apellido_materno)

class Profesion(models.Model):
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='profesiones')

    profesion = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Direccion(models.Model):
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='direcciones')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='direcciones')

    calle = models.CharField(max_length=50, null=True, blank=True)
    pasaje = models.CharField(max_length=50, null=True, blank=True)
    avenida = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.calle + ' ' + self.pasaje + ' ' + self.avenida)


class Documento(models.Model):
    documento_plantilla = models.ForeignKey('server.Documento_plantilla', on_delete=models.CASCADE, default=True, related_name='documentos')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Documento_plantilla(models.Model):

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id + ' ' + self.document)

class Genero(models.Model):
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='generos')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='generos')

    mujer = models.IntegerField(default=True)
    hombre = models.IntegerField(default=True)
    persona_trans = models.IntegerField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.int)

class Nacionalidad(models.Model):
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='nacionalidades')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Historial(models.Model):
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='historiales')

    usuario = models.CharField(max_length=50, null=True, blank=True)
    fecha = models.DateField(auto_now=False, auto_now_add=False)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.usuario + ' ' + self.fecha)


class Sexo(models.Model):
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='sexos')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='sexos')

    SEXO_CHOICES = (
        ('F', 'Femenino',),
        ('M','Masculino',),
        ('O', 'Opcional',)
    )
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Provincia(models.Model):
    comuna = models.ForeignKey('server.Comuna', on_delete=models.CASCADE, default=True, related_name='provincias')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='provincias')
    region = models.ForeignKey('server.Region', on_delete=models.CASCADE, default=True, related_name='provincias')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='provincias')
    aseguradora = models.ForeignKey('server.Aseguradora', on_delete=models.CASCADE, default=True, related_name='provincias')
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='provincias')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='provincias')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Afectado(models.Model):
    comuna = models.ForeignKey('server.Comuna', on_delete=models.CASCADE, default=True, related_name='afectados')

    nombre = models.CharField(max_length=50, null=True, blank=True)
    apellido_materno = models.CharField(max_length=50, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True)
    fecha_nac = models.DateField(auto_now=False, auto_now_add=False)
    rut = models.IntegerField()
    telefono1 = models.IntegerField()
    telefono2 = models.IntegerField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.nombre + ' ' + self.apellido_paterno + ' ' + self.apellido_materno)


class Comuna(models.Model):
    comuna = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.comuna)


class Region(models.Model):
    aseguradora = models.ForeignKey('server.Aseguradora', on_delete=models.CASCADE, default=True, related_name='regiones')
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='regiones')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='regiones')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='regiones')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='regiones')

    descripcion = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Estado_civil(models.Model):
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='estados')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='estados')

    soltero = models.BooleanField()
    casado = models.BooleanField()
    viudo = models.BooleanField()
    separado = models.BooleanField()
    divorciado = models.BooleanField()
    union_libre = models.BooleanField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)

class Tipo_aseguradora(models.Model):
    aseguradora = models.ForeignKey('server.Aseguradora', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')

    nombre_aseguradora = models.CharField(max_length=50, null=True, blank=True)
    rut_aseguradora = models.IntegerField()
    direccion = models.CharField(max_length=50, null=True, blank=True)
    telefono = models.IntegerField()
    comuna = models.CharField(max_length=50, null=True, blank=True)
    region = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.nombre_aseguradora)


class Aseguradora(models.Model):
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='aseguradoras')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='aseguradoras')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='aseguradoras')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='aseguradoras')

    nombre = models.CharField(max_length=50, null=True, blank=True)
    region = models.CharField(max_length=50, null=True, blank=True)
    comuna = models.CharField(max_length=50, null=True, blank=True)
    provincia = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.nombre)


class Reclamo(models.Model):
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='reclamos')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='reclamos')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='reclamos')

    fecha_presentacion = models.DateField(auto_now=False, auto_now_add=False)
    fecha_cierre = models.DateField(auto_now=False, auto_now_add=False)
    materia = models.IntegerField()
    sub_materia1 = models.IntegerField()
    sub_materia2 = models.IntegerField()
    sub_materia3 = models.IntegerField()
    descripcion_problema = models.TextField(default=True)
    solucion_esperada = models.TextField(default=True)


    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)

class Tipo_reclamo(models.Model):

    class Meta:
        ordering = ['id']

        def __str__(self):
            return str(self.id)

class Reclamo_reclamante(models.Model):
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='reclamos_reclamantes')
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='reclamos_reclamantes')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='reclamos_reclamantes')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='reclamos_reclamantes')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Prestador(models.Model):
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='prestadores')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='prestadores')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='prestadores')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='prestadores')

    nombre_institucion = models.CharField(max_length=50, null=True, blank=True)
    fecha_problema = models.DateField(auto_now=False, auto_now_add=False)
    fecha_res_recl_aprestador = models.DateField(auto_now=False, auto_now_add=False)
    fecha_res_pres = models.DateField(auto_now=False, auto_now_add=False)
    fecha_notificacion = models.DateField(auto_now=False, auto_now_add=False)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)

class Tipo_prestador(models.Model):
    prestador = models.ForeignKey('server.Prestador', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')

    publico = models.BooleanField()
    privado = models.BooleanField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Reparo(models.Model):
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='reparos')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='reparos')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='reparos')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='reparos')

    descripcion = models.CharField(max_length=50, null=True, blank=True)
    cursar_reclamo = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id + ' ' + self.descripcion)

class Intendencia(models.Model):
    submateria = models.ForeignKey('server.Submateria', on_delete=models.CASCADE, default=True, related_name='intendencias')
    materia = models.ForeignKey('server.Materia', on_delete=models.CASCADE, default=True, related_name='intendencias')
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='intendencias')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='intendencias')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='intendencias')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='intendencias')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Materia(models.Model):
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='materias')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='materias')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='materias')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='materias')

    descripcion = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class Submateria(models.Model):
    materia = models.ForeignKey('server.Materia', on_delete=models.CASCADE, default=True, related_name='submaterias')
    reclamo = models.ForeignKey('server.Reclamo', on_delete=models.CASCADE, default=True, related_name='submaterias')
    afectado = models.ForeignKey('server.Afectado', on_delete=models.CASCADE, default=True, related_name='submaterias')
    tipo_reclamo = models.ForeignKey('server.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='submaterias')
    reclamante = models.ForeignKey('server.Reclamante', on_delete=models.CASCADE, default=True, related_name='submaterias')


    descripcion1 = models.CharField(max_length=50, null=True, blank=True)
    descripcion2 = models.CharField(max_length=50, null=True, blank=True)
    descripcion3 = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)
