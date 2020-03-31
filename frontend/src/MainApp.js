import React, {Component} from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import configureStore, { history } from './store';
import App from './containers/App';

import { loadUser } from './actions/Auth/Auth'


export const store = configureStore();

class MainApp extends Component {

  componentDidMount(){
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}
export default MainApp;

