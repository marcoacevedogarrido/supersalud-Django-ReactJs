import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import {connect} from 'react-redux'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userSignOut, loadUser} from 'actions/Auth/Auth';
import IntlMessages from 'util/IntlMessages';
import { NavLink } from 'react-router-dom';


class UserInfo extends React.Component {

  state = {
    anchorEl: null,
    open: false,
    user: ''
  };

  handleClick = event => {
    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };




  render() {

    const {auth} = this.props

    
    return (
      <div className="user-profile d-flex flex-row align-items-center">
        <Avatar
          alt='...'
          src={require('./rodolfoxd.jpg')}
          className="user-avatar "
        />
        <div className="user-detail">
          <h4 className="user-name" onClick={this.handleClick}>
           {auth.user ? `${auth.user.first_name +' '+ auth.user.last_name}` : 'cargando...'}
            <i className="zmdi zmdi-caret-down zmdi-hc-fw align-middle"/>
          </h4>
        </div>
        <Menu className="user-info"
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onClose={this.handleRequestClose}
              PaperProps={{
                style: {
                  minWidth: 120,
                  paddingTop: 0,
                  paddingBottom: 0
                }
              }}
        >
          <MenuItem onClick={this.handleRequestClose}>
          <NavLink to="/app/perfil" style={{ textDecoration: 'none' }}>
            <i className="zmdi zmdi-account zmdi-hc-fw mr-2"/>
            Perfil
          </NavLink>
          </MenuItem>
          <MenuItem onClick={() => {
            this.handleRequestClose();
            this.props.userSignOut()
          }}>
            <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2"/>
            Cerrar Sesión
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})



export default connect(mapStateToProps, {userSignOut, loadUser})(UserInfo);


