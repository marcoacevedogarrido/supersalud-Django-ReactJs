import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

//TEMPLATE
import Settings from './Settings';
<<<<<<< HEAD
import Auth from './Auth/Auth';
=======
import Auth from './Auth';
>>>>>>> d56410d9834eb8a628c81a1a969e12d23d174013


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth
});



