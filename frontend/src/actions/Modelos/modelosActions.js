import {
    GET_MODELOS_INIT,
    GET_MODELOS_SUCCESS,
    GET_MODELOS_FAIL
} from '../../constants/ActionTypes';

import axios from 'axios';
import { tokenConfig } from '../Auth/Auth';

import {URL_GLOBAL} from '../../constants/constants'

export const getModelosInit = () => ({
    type: GET_MODELOS_INIT
});


export const getModelosSuccess = (modelos) => ({
    type: GET_MODELOS_SUCCESS,
    payload: modelos
})


export const getModelosFail = () => ({
    type: GET_MODELOS_FAIL

})


export const getModelos = () => {
    return (dispatch, getState) => {
        dispatch(getModelosInit())
        axios
            .get(`${URL_GLOBAL}/api/modelos/`, tokenConfig(getState))
            .then(res => {
                dispatch(getModelosSuccess(res.data.results))
            }).catch(error => {
                dispatch(getModelosFail())
            })
    }
}




