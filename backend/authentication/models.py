from django.db import models
from django.contrib.auth.models import User


class UsuarioPerfil(models.Model):
    perfil_usuario = models.OneToOneField(User,related_name='perfil_usuario', on_delete=models.CASCADE)
    departamento = models.CharField(max_length=50, blank=True, null=True)
    entidad = models.CharField(max_length=50, blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    pais = models.CharField(max_length=50, blank=True, null=True)
    siglaEntidad = models.CharField(max_length=50, blank=True, null=True)
    subdepartamento = models.CharField(max_length=50, blank=True, null=True)
    unidad = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name