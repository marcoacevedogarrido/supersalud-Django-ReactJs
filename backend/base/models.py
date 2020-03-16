from django.db import models
from django.contrib.auth.models import User


class Usuario(models.Model):
    grupo = models.ForeignKey('base.Grupo', on_delete=models.CASCADE, default=True, related_name='usuarios')
    tipo_usuario = models.ForeignKey('base.Tipo_usuario', on_delete=models.CASCADE, default=True, related_name='usuarios')
    grupo_permiso = models.ForeignKey('base.Grupo_permiso', on_delete=models.CASCADE, default=True, related_name='usuarios')
    usuario_grupo = models.ForeignKey('base.Usuario_grupo', on_delete=models.CASCADE, default=True, related_name='usuarios')

    nombre = models.CharField(max_length=50, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True)
    apellido_materno = models.CharField(max_length=50, null=True, blank=True)
    rut = models.IntegerField()
    direccion = models.CharField(max_length=50, null=True, blank=True)
    telefono = models.IntegerField()
    correo_electronico = models.EmailField(max_length=50)
    fecha_nac = models.DateField(auto_now=False, auto_now_add=False)
    comuna = models.CharField(max_length=50, null=True, blank=True)
    rol = models.IntegerField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.nombre + self.apellido_paterno + self.apellido_materno)

class UserProfile(models.Model):
    usuario = models.ForeignKey(Usuario, blank=True, null=True, on_delete=models.CASCADE, verbose_name=u'Usuario')
    usuario.contribute_to_class(User, 'usuario')
    user= models.OneToOneField(User, on_delete=models.CASCADE, null=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.usuario)

class Grupo(models.Model):
    grupo_permiso = models.ForeignKey('base.Grupo_permiso', on_delete=models.CASCADE, default=True, related_name='grupos')
    usuario_grupo = models.ForeignKey('base.Usuario_grupo', on_delete=models.CASCADE, default=True, related_name='grupos')

    admisibilidad_if = models.IntegerField()
    admisibilidad_ip = models.IntegerField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)

class Grupo_permiso(models.Model):
    usuario_grupo = models.ForeignKey('base.Usuario_grupo', on_delete=models.CASCADE, default=True, related_name='grupos_permisos')

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
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='reclamantes')
    documento = models.ForeignKey('base.Documento', on_delete=models.CASCADE, default=True, related_name='reclamantes')
    nacionalidad = models.ForeignKey('base.Nacionalidad', on_delete=models.CASCADE, default=True, related_name='reclamantes')

    nombre = models.CharField(max_length=50, null=True, blank=True)
    apellido_paterno = models.CharField(max_length=50, null=True, blank=True)
    apellido_materno = models.CharField(max_length=50, null=True, blank=True)
    fecha_nac = models.DateField(auto_now=False, auto_now_add=False)
    nacionalidad = models.IntegerField()
    telefono1 = models.IntegerField()
    telefono2 = models.IntegerField()
    rut = models.IntegerField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.nombre + self.apellido_paterno + self.apellido_materno)


class Profesion(models.Model):
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='profesiones')

    profesion = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Direccion(models.Model):
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='direcciones')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='direcciones')

    calle = models.CharField(max_length=50, null=True, blank=True)
    pasaje = models.CharField(max_length=50, null=True, blank=True)
    avenida = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.calle + self.pasaje + self.avenida)


class Documento(models.Model):
    documento_plantilla = models.ForeignKey('base.Documento_plantilla', on_delete=models.CASCADE, default=True, related_name='documentos')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Documento_plantilla(models.Model):

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id + self.document)

class Genero(models.Model):
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='generos')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='generos')

    mujer = models.IntegerField(default=True)
    hombre = models.IntegerField(default=True)
    persona_trans = models.IntegerField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.int)

class Nacionalidad(models.Model):
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='nacionalidades')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Historial(models.Model):
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='historiales')

    usuario = models.CharField(max_length=50, null=True, blank=True)
    fecha = models.DateField(auto_now=False, auto_now_add=False)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.usuario + self.fecha)


class Sexo(models.Model):
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='sexos')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='sexos')

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
    comuna = models.ForeignKey('base.Comuna', on_delete=models.CASCADE, default=True, related_name='provincias')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='provincias')
    region = models.ForeignKey('base.Region', on_delete=models.CASCADE, default=True, related_name='provincias')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='provincias')
    aseguradora = models.ForeignKey('base.Aseguradora', on_delete=models.CASCADE, default=True, related_name='provincias')
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='provincias')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='provincias')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Afectado(models.Model):
    comuna = models.ForeignKey('base.Comuna', on_delete=models.CASCADE, default=True, related_name='afectados')

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
        return str(self.nombre + self.apellido_paterno + self.apellido_materno)


class Comuna(models.Model):
    comuna = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.comuna)


class Region(models.Model):
    aseguradora = models.ForeignKey('base.Aseguradora', on_delete=models.CASCADE, default=True, related_name='regiones')
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='regiones')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='regiones')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='regiones')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='regiones')

    descripcion = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Estado_civil(models.Model):
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='estados')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='estados')

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
    aseguradora = models.ForeignKey('base.Aseguradora', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='tipos_aseguradoras')

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
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='aseguradoras')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='aseguradoras')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='aseguradoras')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='aseguradoras')

    nombre = models.CharField(max_length=50, null=True, blank=True)
    region = models.CharField(max_length=50, null=True, blank=True)
    comuna = models.CharField(max_length=50, null=True, blank=True)
    provincia = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.nombre)


class Reclamo(models.Model):
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='reclamos')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='reclamos')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='reclamos')

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
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='reclamos_reclamantes')
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='reclamos_reclamantes')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='reclamos_reclamantes')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='reclamos_reclamantes')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Prestador(models.Model):
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='prestadores')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='prestadores')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='prestadores')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='prestadores')

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
    prestador = models.ForeignKey('base.Prestador', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='tipos_prestadores')

    publico = models.BooleanField()
    privado = models.BooleanField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Reparo(models.Model):
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='reparos')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='reparos')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='reparos')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='reparos')

    descripcion = models.CharField(max_length=50, null=True, blank=True)
    cursar_reclamo = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id + self.descripcion)

class Intendencia(models.Model):
    submateria = models.ForeignKey('base.Submateria', on_delete=models.CASCADE, default=True, related_name='intendencias')
    materia = models.ForeignKey('base.Materia', on_delete=models.CASCADE, default=True, related_name='intendencias')
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='intendencias')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='intendencias')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='intendencias')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='intendencias')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)


class Materia(models.Model):
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='materias')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='materias')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='materias')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='materias')

    descripcion = models.TextField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.descripcion)


class Submateria(models.Model):
    materia = models.ForeignKey('base.Materia', on_delete=models.CASCADE, default=True, related_name='submaterias')
    reclamo = models.ForeignKey('base.Reclamo', on_delete=models.CASCADE, default=True, related_name='submaterias')
    afectado = models.ForeignKey('base.Afectado', on_delete=models.CASCADE, default=True, related_name='submaterias')
    tipo_reclamo = models.ForeignKey('base.Tipo_reclamo', on_delete=models.CASCADE, default=True, related_name='submaterias')
    reclamante = models.ForeignKey('base.Reclamante', on_delete=models.CASCADE, default=True, related_name='submaterias')


    descripcion1 = models.CharField(max_length=50, null=True, blank=True)
    descripcion2 = models.CharField(max_length=50, null=True, blank=True)
    descripcion3 = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return str(self.id)

class ServicioTask(models.Model):

    class Meta:
        ordering = ['id']

        def __str__(self):
            return str(self.id)
