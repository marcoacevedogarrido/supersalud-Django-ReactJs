import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  hideMessage,
  showAuthLoader,
  userSignIn,
} from 'actions/Auth/Auth';

class SignIn extends React.Component {
  
  state = {
    username: '',
    password: ''
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.userSignIn(this.state.username, this.state.password);
}


  onChange = e => this.setState({ [e.target.name]: e.target.value });

  
  componentDidUpdate() {
    if (this.props.token !== null) {
      this.props.history.push('/');
    }
  }
  
  
  render() {
    const {
      username,
      password
    } = this.state;
    const {showMessage, loader, alertMessage, token} = this.props;

    if(token !== null){
      return <Redirect to='/app/index' />
    }

    return (
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">

          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img src={require("assets/images/logo.png")} alt="jambo" title="jambo"/>
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header mb-4">
              <h1>Login</h1>
            </div>

            <div className="app-login-form">
            <form onSubmit={this.onSubmit}>
                <fieldset>
                  <TextField
                    inputProps={{ maxLength: 40 }}
                    label='Username'
                    fullWidth
                    onChange={this.onChange}
                    defaultValue={username}
                    value={username}
                    margin="normal"
                    name="username"
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label='Password'
                    fullWidth
                    onChange={this.onChange}
                    defaultValue={password}
                    value={password}
                    name="password"
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button type='submit' variant="contained" color="primary">
                     Login
                    </Button>
                    <Link to="/signup">
                      Cambiar contraseña
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>

        </div>
        {
          loader &&
          <div className="loader-view">
            <CircularProgress/>
          </div>
        }
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer/>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, token, isAuthenticated} = auth;
  return {loader, alertMessage, showMessage, token, isAuthenticated}
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
})(SignIn);
