from rest_framework import serializers, viewsets
from server.models import Reclamo
from server.api.aseguradoras import AseguradoraSerializer
from server.api.nacionalidades import NacionalidadSerializer
from server.api.representantes import RepresentanteSerializer
from server.api.sexopac import SexoPacSerializer
from server.api.sexorep import SexoRepSerializer
from server.api.generorec import GeneroRecSerializer
from server.api.generorep import GeneroRepSerializer
from server.api.generopac import GeneroPacSerializer
from server.api.comunarep import ComunaRepSerializer
from server.api.regionreclamantes import RegionRecSerializer
from server.api.comunas import ComunaSerializer
from server.api.nacionalidadrep import NacionalidadRepSerializer
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, JSONParser


class ReclamoSerializer(serializers.ModelSerializer):
    run_rep              = serializers.IntegerField(source='representante.rut', read_only=True)
    genero_rep           = GeneroRepSerializer(source='generorepresentante', read_only=True)
    sexo_pac             = SexoPacSerializer(source='sexopaciente', read_only=True)
    sexo_cot             = SexoPacSerializer(source='sexoreclamante', read_only=True)
    sexo_rep             = SexoRepSerializer(source='sexorepresentante', read_only=True)
    genero_cot           = GeneroRecSerializer(source='generorecclamante', read_only=True)
    nacionalidad_rep     = NacionalidadRepSerializer(source='nacionalidadrep', read_only=True)
    genero_cot           = GeneroRecSerializer(source='generorecclamante', read_only=True)
    region_cot           = RegionRecSerializer(source='regionrec', read_only=True)

    tipo_pac             = serializers.CharField(source='afectado.tipo_pac', read_only=True)
    fecha_nac_rep        = serializers.DateField(source='representante.fecha_nac', read_only=True)
    dv_cot               = serializers.IntegerField(source='reclamante.digitoverificador', read_only=True)
    dv_pac               = serializers.IntegerField(source='afectado.digitoverificador', read_only=True)

    copia_ced_rep        = serializers.FileField(source='representante.copia_ced_rep', read_only=True)
    genero_pac           = GeneroPacSerializer(source='generopaciente')

    aseguradora_         = AseguradoraSerializer(source='aseguradora', read_only=True)
    genero_pac           = serializers.CharField(source='afectado.genero', read_only=True)
    apellido_m_pac       = serializers.CharField(source='afectado.apellido_materno', read_only=True)
    email_rep            = serializers.EmailField(source='representante.email', read_only=True)
    nombre_cot           = serializers.CharField(source='reclamante.nombre', read_only=True)
    apellido_p_pac       = serializers.CharField(source='afectado.apellido_paterno', read_only=True)
    sexo_pac             = serializers.CharField(source='afectado.sexo', read_only=True)
    apellido_m_cot       = serializers.CharField(source='reclamante.apellido_materno', read_only=True)
    sexo_cot             = serializers.CharField(source='afectado.sexo', read_only=True)
    apellido_p_rep       = serializers.CharField(source='representante.apellido_paterno', read_only=True)
    edad_rep             = serializers.CharField(source='representante.edad', read_only=True)
    correo_cot           = serializers.EmailField(source='afectado.email', read_only=True)
    nombre_pac           = serializers.CharField(source='afectado.nombre', read_only=True)
    pdf_cedula_cot       = serializers.CharField(source='reclamante.pdf_cedula', read_only=True)
    nacionalidad_cot     = NacionalidadSerializer(source='nacionalidad', read_only=True)
    nombre_rep           = serializers.CharField(source='representante.nombre', read_only=True)
    solicitud_concreta   = serializers.SerializerMethodField()
    apellido_m_rep       = serializers.CharField(source='representante.apellido_materno', read_only=True)
    telefono_1_cot       = serializers.CharField(source='representante.telefono1', read_only=True)
    edad_pac             = serializers.CharField(source='afectado.edad', read_only=True)
    fallece_pac          = serializers.CharField(source='afectado.fallece', read_only=True)
    apellido_p_cot       = serializers.CharField(source='reclamante.apellido_paterno', read_only=True)
    edad_cot             = serializers.CharField(source='reclamante.edad', read_only=True)
    region_rep           = serializers.CharField(source='representante.region', read_only=True)
    run_pac              = serializers.IntegerField(source='afectado.rut', read_only=True)
    direccion_tipo_rep   = serializers.CharField(source='representante.direccion', read_only=True)
    run_cot              = serializers.IntegerField(source='reclamante.rut', read_only=True)
    direccion_depto_cot  = serializers.CharField(source='reclamante.direccion.depto', read_only=True)

    comuna_rep           = ComunaRepSerializer(source='comunarep', read_only=True)
    direccion_nombre_rep = serializers.CharField(source='afectado.direccion', read_only=True)
    telefono_2_cot       = serializers.CharField(source='reclamante.telefono2', read_only=True)
    direccion_nombre_cot = serializers.CharField(source='reclamante.direccion.calle', read_only=True)
    telefono_1_rep       = serializers.CharField(source='representante.telefono1', read_only=True)
    telefono_2_rep       = serializers.CharField(source='reclamante.telefono2', read_only=True)
    direccion_depto_rep  = serializers.CharField(source='afectado.direccion.depto', read_only=True)
    direccion_depto_rep  = serializers.CharField(source='afectado.direccion.numero', read_only=True)
    correo_not           = serializers.EmailField(source='afectado.email', read_only=True)
    direccion_nro_rep    = serializers.CharField(source='representante.direccion.numero', read_only=True)
    comuna_cot           = ComunaSerializer(source='reclamante.comuna', read_only=True)
    fecha_nac_pac        = serializers.CharField(source='afectado.fecha_nac', read_only=True)
    materia              = serializers.CharField(source='materia.id', read_only=True)
    direccion_nro_cot    = serializers.CharField(source='reclamante.direccion.numero', read_only=True)
    fecha_nac_cot        = serializers.CharField(source='reclamante.fecha_nac', read_only=True)


    class Meta:
        model = Reclamo
        fields = ['run_rep',
                'genero_rep',
                'lugar_uno',
                'pdf_dec_jur',
                'dv_cot',
                'tipo_beneficiario',
                'archivo_adj_cuatro',
                'fecha_nac_rep',
                'aseguradora_',
                'copia_ced_rep',
                'complaint_id',
                'genero_pac',
                'hasta_dos',
                'apellido_m_pac',
                'email_rep',
                'nombre_cot',
                'apellido_p_pac',
                'desde_uno',
                'sexo_pac',
                'apellido_m_cot',
                'sexo_cot',
                'pdf_poder_simple_her',
                'apellido_p_rep',
                'edad_rep',
                'triage',
                'hospitalizacion',
                'correo_cot',
                'nombre_pac',
                'pdf_cedula_cot',
                'nacionalidad_cot',
                'nombre_rep',
                'solicitud_concreta',
                'apellido_m_rep',
                'telefono_1_cot',
                'edad_pac',
                'sexo_rep',
                'fallece_pac',
                'lugar_tres',
                'pdf_unico',
                'pdf_cer_def',
                'apellido_p_cot',
                'genero_cot',
                'nacionalidad_rep',
                'submateria',
                'edad_cot',
                'region_rep',
                'region',
                'run_pac',
                'dv_pac',
                'direccion_tipo_rep',
                'archivo_adj_dos',
                'run_cot',
                'hasta_uno',
                'direccion_depto_cot',
                'comuna_rep',
                'direccion_nombre_rep',
                'desde_dos',
                'telefono_2_cot',
                'hecho_mes',
                'archivo_adj_tres',
                'notificar_tramite_id',
                'desde_tres',
                'desc_problema',
                'hasta_tres',
                'pdf_poder_simple_rep',
                'direccion_nombre_cot',
                'telefono_1_rep',
                'tipo_pac',
                'telefono_2_rep',
                'direccion',
                'direccion_depto_rep',
                'lugar_dos',
                'region_cot',
                'hecho_ano',
                'pdf_cer_nac_her',
                'archivo_adj_uno',
                'tipo_reclamo',
                'comuna_cot',
                'fecha_nac_pac',
                'categoria_clasificador',
                'folio',
                'materia',
                'direccion_nro_cot',
                'fecha_nac_cot',
                ]
        read_only_fields = ['fecha_presentacion',
                            'fecha_cierre',
                            'sub_materia1',
                            'sub_materia2',
                            'sub_materia3',
                            'folio',
                            'desc_problema',
                            'solucion_esperada',
                            'lugar_uno',
                            'notificacion',
                            'pdf_dec_jur',
                            'archivo_adj_cuatro',
                            'copia_ced_rep',
                            'pdf_poder_simple_her',
                            'pdf_unico',
                            'pdf_cer_def',
                            'archivo_adj_dos',
                            'archivo_adj_tres',
                            'pdf_poder_simple_rep',
                            'archivo_adj_uno' ,
                            'submateria',
                            'direccion',
                            'tipo_reclamo',
                            'fecha_uno',
                            'hasta_dos',
                            'complaint_id',
                            'desde_uno',
                            ]


    def get_solicitud_concreta(self, obj):
        return "xxxxxxxxxxxxxxxxxxxxxxxxxx  gracias ",


class ReclamoView(viewsets.ModelViewSet):
    queryset = Reclamo.objects.all()
    serializer_class = ReclamoSerializer
