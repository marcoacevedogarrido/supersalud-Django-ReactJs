import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

//REDUCERS
import procesosReducers from './procesosReducers';
import notificacionesReducers from './notificacionesReducers'
import modelosReducers from './modelosReducers';
import homeReducers from './homeReducers';
import countProceDashReducers from './countProceDashReducers'
import UsuariosReducers from './UsuariosReducers';
import DetalleProcesoReducers from './DetalleProcesoReducers';
import DocumentosReducers from './DocumentosReducers';
import EntranamientoReducers from './EntrenamientoModelo/EntranamientoReducers'
import PerfilReducers from './PerfilReducers'

//TEMPLATE
import Settings from './Settings';
import Auth from './Auth';
import EntidadesReducers from './EntidadesReducers';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  procesos: procesosReducers,
  usuarios: UsuariosReducers,
  documentos: DocumentosReducers,
  doc_filters: procesosReducers,
  modelos : modelosReducers,
  notificaciones: notificacionesReducers,
  home: homeReducers,
  countProceDash: countProceDashReducers,
  datos: DetalleProcesoReducers,
  docuEntrenamiento: EntranamientoReducers,
  perfil: PerfilReducers,
  entities: EntidadesReducers
});



