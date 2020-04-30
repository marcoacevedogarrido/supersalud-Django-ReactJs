# Generated by Django 2.2.6 on 2020-04-22 16:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('server', '0138_merge_20200421_1439'),
    ]

    operations = [
        migrations.CreateModel(
            name='Observacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('texto', models.TextField()),
                ('fecha_observacion', models.DateTimeField(auto_now_add=True)),
                ('process_instance', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='observaciones', to='server.Process_Instance')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='observaciones', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]