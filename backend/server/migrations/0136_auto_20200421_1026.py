# Generated by Django 3.0.5 on 2020-04-21 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0135_reclamo_pdf_cer_nac_her'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reclamo',
            name='tipo_reclamo',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]