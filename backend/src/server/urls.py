from django.urls import path
from rest_framework import routers
from server.api.cotizante import CotizanteView
from server.api.nacionalidades import NacionalidadView
from server.api.historiales import HistorialView
from server.api.sexos import SexoView
from server.api.provincias import ProvinciaView
from server.api.afectados import AfectadoView
from server.api.comunas import ComunaView
from server.api.regiones import RegionView
from server.api.tipos_aseguradoras import TipoAseguradoraView
from server.api.aseguradoras import AseguradoraView
from server.api.prestadores import PrestadoresView
from server.api.materias import MateriaView
from server.api.submaterias import SubmateriaView
from server.api.generos import GeneroView
from server.api.sexos import SexoView
from server.api.tipos_reclamos import TipoReclamoView
from server.api.representantes import RepresentanteView
from server.api.instancias import InstanciaFuriaView

from server.api.camunda import DeploymentView
from server.api.process_definition import ProcessDefinitionStart, ProcessInstanceVariables
from server.api.ecm import ECMFiles, ECMAddFiles
from server.api.process_instance import ProcessInstanceStart, InstanciaQuery

# APIS ACCIONES INSTANCIAS
from server.api.observaciones import ObservacionsViews
from server.api.instancias import InstanciasView, IntanciaDetailView



router = routers.SimpleRouter()

router.register(r'api/nacionalidades', NacionalidadView, 'nacionalidades')
router.register(r'api/historiales', HistorialView, 'historiales')
router.register(r'api/sexos', SexoView, 'sexos')
router.register(r'api/provincias', ProvinciaView, 'provincias')
router.register(r'api/afectados', AfectadoView, 'afectados')
router.register(r'api/comunas', ComunaView, 'comunas')
router.register(r'api/regiones', RegionView, 'regiones')
router.register(r'api/tipos_aseguradoras', TipoAseguradoraView, 'tipos_aseguradoras')
router.register(r'api/aseguradoras', AseguradoraView, 'aseguradoras')
router.register(r'api/prestadores', PrestadoresView, 'prestadores')
router.register(r'api/materias', MateriaView, 'materias')
router.register(r'api/generos', GeneroView, 'generos')
router.register(r'api/submaterias', SubmateriaView, 'submaterias')
router.register(r'api/cotizantes', CotizanteView, 'cotizantes')

router.register(r'api/tipos_reclamos', TipoReclamoView, 'tipos_reclamos')
router.register(r'api/representantes', RepresentanteView, 'representantes')

urlpatterns = [
    path('api/camunda/deployment', DeploymentView.as_view(), name="deployment"),
    path('api/camunda/process-definition/key/<str:key>/start', ProcessDefinitionStart.as_view(), name="process_definition"),
    path('api/camunda/process-instance/<str:pk>/variables', ProcessInstanceVariables.as_view(), name="instance_variables"),
    path('api/camunda/process-instance/key/<str:key>/start', ProcessInstanceStart.as_view(), name='star_instance'),
    path('api/camunda/process-instance/user', InstanciaQuery.as_view(), name='user_instance'),
    path('api/ecm/file', ECMFiles.as_view(), name="ecm"),
    path('api/ecm/upload/file', ECMAddFiles.as_view(), name="ecm_files"),
    # ACCIONES DE LAS INSTANCIAS
    # ----ACCION OBSERVACION----
    path('api/observaciones/', ObservacionsViews.as_view(), name="observaciones"),
    path('api/nueva-observacion/', ObservacionsViews.as_view(), name="nueva_observacion"),
    # --------------------------
    # RECLAMO
    path('api/instancia-furia/', InstanciaFuriaView.as_view(), name='instancia_furia'),
    # INSTANCIA VIEW
    path('api/instancias-all/', InstanciasView.as_view(), name='instancia_furia'),
    path('api/instancia/<str:pk>/', IntanciaDetailView.as_view(), name='instancia_furia')
    
]
urlpatterns += router.urls 
