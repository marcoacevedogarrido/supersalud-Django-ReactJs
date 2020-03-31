import axios from 'axios'
import {
    GET_COUT_PROCESO_INIT,
    GET_COUT_PROCESO_DOCU_SUCCESS,
    GET_COUT_PROCESO_DOCU_FAIL
} from 'constants/ActionTypes';

import { URL_GLOBAL } from 'constants/constants'
import { tokenConfig } from '../Auth/Auth';


export const getCountInit = () => ({
    type: GET_COUT_PROCESO_INIT
});


export const getCountSuccess = (notificaciones) => ({
    type: GET_COUT_PROCESO_DOCU_SUCCESS,
    payload: notificaciones
})


export const getCountFail = () => ({
    type: GET_COUT_PROCESO_DOCU_FAIL

})

export const getCount = () => {
    return (dispatch, getState) => {
        dispatch(getCountInit)
        axios
        .get(`${URL_GLOBAL}/api/dashboard/user/procydocs/`, tokenConfig(getState))
        .then(res => {
            dispatch(getCountSuccess(res.data))
        }).catch(error => {
            dispatch(getCountFail(error))
        })
    }
}

