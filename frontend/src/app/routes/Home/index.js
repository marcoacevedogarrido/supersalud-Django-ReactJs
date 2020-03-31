import React, { Fragment } from 'react';

import ContainerHeader from 'components/ContainerHeader';
import {
  authors,
} from './containers/data';

import CantidadProDoc from "./containers/ContadorProDoc";

import UsuariosProcesos from './containers/UsuariosProcesos/UserDetailTable';
import UltimosProcesos from './containers/UltimosProcesos/UltimosProcesos';

import CardHeader from './containers/CardHeader/index';
import { connect } from 'react-redux';

import { loadUser } from 'actions/Auth/Auth';


class Home extends React.Component {

  render() {

    const { auth } = this.props

    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title="Dashboard" />
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="row">
              <CantidadProDoc/>
            </div>
          </div>
        </div>
        <div className="row">
          { auth.user && !auth.user.is_staff ?
            <Fragment>
              <div className="col-lg-12 col-sm-6 col-12 order-lg-6">
                <div className="jr-card">
                  <div className="jr-card-header mb-3 d-flex">
                    <h3 className="mb-0 mr-auto">Ultimos Procesos</h3>
                    <span className="badge badge-secondary">Semanal</span>
                  </div>
                  <UltimosProcesos />
                </div>
              </div>
            </Fragment>
            :
            <Fragment>
              <div className="col-lg-8 col-sm-6 col-12 order-lg-6">
                <div className="jr-card">
                  <div className="jr-card-header mb-3 d-flex">
                    <h3 className="mb-0 mr-auto">Ultimos Procesos</h3>
                    <span className="badge badge-secondary">Semanal</span>
                  </div>
                  <UltimosProcesos />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 order-lg-6">
                <div className="jr-card jr-full-card">
                  <CardHeader heading="Info Procesos"
                    subHeading="Procesos con más Documentos" />
                  <div className="jr-card-body">
                    <UsuariosProcesos data={authors} />
                  </div>
                </div>
              </div>
            </Fragment>
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth
})




export default connect(mapStateToProps, { loadUser })(Home)





