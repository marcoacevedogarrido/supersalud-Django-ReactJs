import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Link } from 'react-router-dom';

import { URL_GLOBAL } from '../constants/constants'

import axios from 'axios'

import Swal from 'sweetalert2';



const SignUp = ({history}) => {

  const [resetPassword, setPassword] = useState({
    codigo: '',
    password: '',
    confirmarPassword: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setPassword({
      ...resetPassword,
      [e.target.name]: e.target.value
    })
  };





  const cambiarPass = e => {
    setLoading(true)
    e.preventDefault();

    const { codigo, password } = resetPassword

    const olderPass = codigo
    const newPass = password

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ olderPass, newPass });

    axios.post(`${URL_GLOBAL}/api/auth/user/recover/`, body, config)
      .then(res => {
        Swal.fire(
          'Exito!',
          `${res.data}`,
          'success'
        )
        setLoading(false)
        history.push('/signin')
        
      }).catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data}`,
        })
        setLoading(false)
      })
  }

  return (
    <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
        <div className="app-logo-content d-flex align-items-center justify-content-center">
          <Link className="logo-lg" to="/" title="Apiux">
            <img src={require("assets/images/logo.png")} alt="apiux" title="apiux" />
          </Link>
        </div>

        <div className="app-login-content">
          <div className="app-login-header">
            <h1>Cambiar Contraseña</h1>
          </div>
        
          <div className="app-login-form">
            <form onSubmit={cambiarPass} noValidate autoComplete="off">
              <TextField
                type="text"
                label="Codigo"
                name="codigo"
                fullWidth
                margin="normal"
                className="mt-0 mb-2"
                onChange={handleChange}
              />
              <TextField
                type="password"
                label="Nueva Contraseña"
                name="password"
                fullWidth
                margin="normal"
                className="mt-0 mb-2"
                onChange={handleChange}
              />
              <TextField
                type="password"
                label="Confirmar Constraseña"
                name="confirmarPassword"
                fullWidth
                margin="normal"
                className="mt-0 mb-4"
                onChange={handleChange}
              />
              <div className="mb-3 d-flex align-items-center justify-content-between">
                <Button type='submit' variant="contained" color="primary">
                  Actualizar Contraseña
                    </Button>
                <Link to="/signin">
                  Login
                    </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {
        loading &&
        <div className="loader-view">
          <CircularProgress />
        </div>
      }



    </div>
  )
}

export default SignUp
