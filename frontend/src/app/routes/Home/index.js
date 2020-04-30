import React, { Fragment } from 'react';
import ContainerHeader from 'components/ContainerHeader';
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

          </div>
        </div>
        <div className="row">
          { auth.user ?
            <Fragment>
              <div className="col-lg-12 col-sm-6 col-12 order-lg-6">
                <div className="jr-card">
                  
                  
                  <h3>Logeado</h3>
                </div>
              </div>
            </Fragment>
            :
            null
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





