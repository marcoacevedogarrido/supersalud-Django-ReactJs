import {
    GET_DOC_TRAINING_INIT,
    GET_DOC_TRAINING_SUCCESS,
    GET_DOC_TRAINING_DATA,
    GET_DOC_TRAINING_FAIL

} from '../../constants/ActionTypes';

import { URL_GLOBAL } from '../../constants/constants'
import { tokenConfig } from '../Auth/Auth'

import axios from 'axios';

export const getEntrenamientoDocu = () => ({
    type: GET_DOC_TRAINING_INIT
});

export const getEntrenamientoSuccess = (docuEntrenamiento) => ({
    type: GET_DOC_TRAINING_SUCCESS,
    payload: docuEntrenamiento
})

export const getDataEntranamiento = (data) => ({
    type: GET_DOC_TRAINING_DATA,
    payload: data
})

export const getEntrenamientoFail = () => ({
    type: GET_DOC_TRAINING_FAIL

})


export const getEntrenamientoDocuAction = (id, page) => {
    return (dispatch, getState) => {
        dispatch(getEntrenamientoDocu)
        axios
            .get(`${URL_GLOBAL}/api/entrenamiento/modelo/${id}/?page=${page}`, tokenConfig(getState))
            .then(res => {
                dispatch(getEntrenamientoSuccess(res.data.results))
                dispatch(getDataEntranamiento(res.data.count))
            }).catch(error => {
                dispatch(getEntrenamientoFail())
            })
    }
}
