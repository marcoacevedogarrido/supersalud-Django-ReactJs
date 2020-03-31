import {
    CHANGE_PASS_INIT,
    CHANGE_PASS_SUCCESS,
    CHANGE_PASS_FAIL

} from 'constants/ActionTypes';

import { URL_GLOBAL } from '../../constants/constants'
import { tokenConfig } from '../Auth/Auth'

import axios from 'axios';
import Swal from 'sweetalert2';



export const changePassInit = () => ({
    type: CHANGE_PASS_INIT
})

export const changePassSuccess = () => ({
    type: CHANGE_PASS_SUCCESS
})

export const changePassFail = () => ({
    type: CHANGE_PASS_FAIL,
})

export const changePassActions = formPass => {
    return (dispatch, getState) => {
        dispatch(changePassInit())
        axios
            .post(`${URL_GLOBAL}/api/auth/user/change/`, formPass, tokenConfig(getState))
            .then(res => {
                dispatch(changePassSuccess(res.data))
                Swal.fire(
                    'Exito!',
                    'Contraseña cambiada exitosamente',
                    'success'
                )
            }).catch(error => {
                dispatch(changePassFail())
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Contraseña Incorrecta',
                })
            })
    }
}
