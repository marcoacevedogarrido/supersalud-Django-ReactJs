# Generated by Django 3.0.5 on 2020-04-21 09:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0115_comunarepresentante'),
    ]

    operations = [
        migrations.AddField(
            model_name='reclamo',
            name='comunarep',
            field=models.OneToOneField(blank=True, default=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reclamos', to='server.ComunaRepresentante'),
        ),
    ]