from django.urls import path
from rest_framework import routers
from server.api.usuarios import UsuarioView
from server.api.grupos import GrupoView
from server.api.usuario_grupos import UsuarioGrupoView
from server.api.grupo_permisos import GrupoPermisoView
from server.api.tipo_usuarios import TipoUsuarioView
from server.api.reclamantes import ReclamanteView
from server.api.profesiones import ProfesionView
from server.api.direcciones import DireccionView
from server.api.documentos import DocumentoView
from server.api.documento_plantillas import DocumentoPlantillaView
from server.api.generos import GeneroView
from server.api.nacionalidades import NacionalidadView
from server.api.historiales import HistorialView
from server.api.sexos import SexoView
from server.api.provincias import ProvinciaView
from server.api.afectados import AfectadoView
from server.api.comunas import ComunaView
from server.api.regiones import RegionView
from server.api.estados_civiles import EstadoCivilView
from server.api.tipos_aseguradoras import TipoAseguradoraView
from server.api.aseguradoras import AseguradoraView
from server.api.reclamos import ReclamoView
from server.api.reclamos_reclamantes import ReclamoReclamanteView
from server.api.prestadores import PrestadoresView
from server.api.tipos_prestadores import TipoPrestadorView
from server.api.reparos import ReparoView
from server.api.intendencias import IntendenciaView
from server.api.materias import MateriaView
from server.api.submaterias import SubmateriaView

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

urlpatterns = []
urlpatterns += router.urls
