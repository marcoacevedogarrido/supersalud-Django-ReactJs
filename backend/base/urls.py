from django.urls import path
from rest_framework import routers
from base.api.usuarios import UsuarioView
from base.api.grupos import GrupoView
from base.api.usuario_grupos import UsuarioGrupoView
from base.api.grupo_permisos import GrupoPermisoView
from base.api.tipo_usuarios import TipoUsuarioView
from base.api.reclamantes import ReclamanteView
from base.api.profesiones import ProfesionView
from base.api.direcciones import DireccionView
from base.api.documentos import DocumentoView
from base.api.documento_plantillas import DocumentoPlantillaView
from base.api.generos import GeneroView
from base.api.nacionalidades import NacionalidadView
from base.api.historiales import HistorialView
from base.api.sexos import SexoView
from base.api.provincias import ProvinciaView
from base.api.afectados import AfectadoView
from base.api.comunas import ComunaView
from base.api.regiones import RegionView
from base.api.estados_civiles import EstadoCivilView
from base.api.tipos_aseguradoras import TipoAseguradoraView
from base.api.aseguradoras import AseguradoraView
from base.api.reclamos import ReclamoView
from base.api.reclamos_reclamantes import ReclamoReclamanteView
from base.api.prestadores import PrestadoresView
from base.api.tipos_prestadores import TipoPrestadorView
from base.api.reparos import ReparoView
from base.api.intendencias import IntendenciaView
from base.api.materias import MateriaView
from base.api.submaterias import SubmateriaView
from base.api.servicios import ServicioTaskView

router = routers.SimpleRouter()

router.register(r'api/usuarios', UsuarioView, 'usuarios')
router.register(r'api/grupos', GrupoView, 'grupos')
router.register(r'api/usuario_grupos', UsuarioGrupoView, 'usuario_grupos')
router.register(r'api/grupo_permisos', GrupoPermisoView, 'grupo_permisos')
router.register(r'api/tipo_usuarios', TipoUsuarioView, 'tipo_usuarios')
router.register(r'api/reclamantes', ReclamanteView, 'reclamantes')
router.register(r'api/profesiones', ProfesionView, 'profesiones')
router.register(r'api/direcciones', DireccionView, 'direcciones')
router.register(r'api/documentos', DocumentoView, 'documentos')
router.register(r'api/documento_plantillas', DocumentoPlantillaView, 'documento_plantillas')
router.register(r'api/generos', GeneroView, 'generos')
router.register(r'api/nacionalidades', NacionalidadView, 'nacionalidades')
router.register(r'api/historiales', HistorialView, 'historiales')
router.register(r'api/sexos', SexoView, 'sexos')
router.register(r'api/provincias', ProvinciaView, 'provincias')
router.register(r'api/afectados', AfectadoView, 'afectados')
router.register(r'api/comunas', ComunaView, 'comunas')
router.register(r'api/regiones', RegionView, 'regiones')
router.register(r'api/estados_civiles', EstadoCivilView, 'estados_civiles')
router.register(r'api/tipos_aseguradoras', TipoAseguradoraView, 'tipos_aseguradoras')
router.register(r'api/aseguradoras', AseguradoraView, 'aseguradoras')
router.register(r'api/reclamos', ReclamoView, 'reclamos')
router.register(r'api/reclamos_reclamantes', ReclamoReclamanteView, 'reclamos_reclamantes')
router.register(r'api/prestadores', PrestadoresView, 'prestadores')
router.register(r'api/tiposprestadores', TipoPrestadorView, 'tipos_prestadores')
router.register(r'api/reparos', ReparoView, 'reparos')
router.register(r'api/intendencias', IntendenciaView, 'intendencias')
router.register(r'api/materias', MateriaView, 'materias')
router.register(r'api/submaterias', SubmateriaView, 'submaterias')
router.register(r'servicios', ServicioTaskView, 'servicios')

urlpatterns = []
urlpatterns += router.urls
