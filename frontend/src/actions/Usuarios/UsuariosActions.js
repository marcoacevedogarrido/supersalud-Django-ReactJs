import {
    GET_USUARIOS_INIT,
    GET_USUARIOS_SUCCESS,
    GET_USUARIOS_FAIL,
    CREATE_USER_INIT,
    CREATE_USER,
    CREATE_USER_FAIL

} from '../../constants/ActionTypes';

import { URL_GLOBAL } from '../../constants/constants'
import { tokenConfig } from '../Auth/Auth'

import axios from 'axios';
import Swal from 'sweetalert2';

export const getUsuariosInit = () => ({
    type: GET_USUARIOS_INIT
});

export const getUsuariosSuccess = (usuarios) => ({
    type: GET_USUARIOS_SUCCESS,
    payload: usuarios
})

export const getUsuariosFail = () => ({
    type: GET_USUARIOS_FAIL
})

export const getUsuarios = () => {
    return (dispatch, getState) => {
        dispatch(getUsuariosInit)
        axios
            .get(`${URL_GLOBAL}/api/auth/users/all`, tokenConfig(getState))
            .then(res => {
                dispatch(getUsuariosSuccess(res.data.results))
            }).catch(error => {
                dispatch(getUsuariosFail())
            })
    }
}

export const newUserInit = () => ({
    type: CREATE_USER_INIT
})


export const newUserSuccess = (usuario) => ({
    type: CREATE_USER,
    payload: usuario
})

export const newUserFail = () => ({
    type: CREATE_USER_FAIL,
})


export const newUser = usuario => {
    return (dispatch, getState) => {
        dispatch(newUserInit())
        axios
            .post(`${URL_GLOBAL}/api/auth/register`, usuario, tokenConfig(getState))
            .then(res => {
                dispatch(newUserSuccess(res.data))
                Swal.fire(
                    'Exito!',
                    'Usuario Creado Correctamente',
                    'success'
                )
            }).catch(error => {
                dispatch(newUserFail())
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario y/o Email ya existe',
                })
            })
    }
}
