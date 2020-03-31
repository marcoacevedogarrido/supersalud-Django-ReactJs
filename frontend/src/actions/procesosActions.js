import {
    GET_PROCESOS_INIT,
    GET_PROCESOS_SUCCESS,
    GET_PROCESOS_FAIL,
    GET_DATA_PROCESO,
    DELETE_PROCESO,
    CREATE_PROCESO,
    UPDATE_PROCESO,
    // 
    GET_PROCESO_INIT,
    GET_PROCESO,
    GET_PROCESO_403,
    GET_PROCESO_FAIL,

    // ENTIDADES
    SAVE_LAST_PROCESS,
    DELETE_LAST_PROCESS


} from '../constants/ActionTypes';

import { URL_GLOBAL } from '../constants/constants'
import { tokenConfig } from './Auth/Auth'

import axios from 'axios';

export const getProcesosInit = () => ({
    type: GET_PROCESOS_INIT
});

export const getProcesosSuccess = (procesos) => ({
    type: GET_PROCESOS_SUCCESS,
    payload: procesos
})

export const getDataProceso = (data) => ({
    type: GET_DATA_PROCESO,
    payload: data
})



export const getProcesosFail = () => ({
    type: GET_PROCESOS_FAIL

})




export const getProcesos = (quantity, query, page) => {
    return (dispatch, getState) => {
        dispatch(getProcesosInit)
        axios
            .get(`${URL_GLOBAL}/api/procesos/query/?search=${query}&page_size=${quantity}&page=${page}`, tokenConfig(getState))
            .then(res => {
                dispatch(getProcesosSuccess(res.data.results))
                dispatch(getDataProceso(res.data.count))
            }).catch(error => {
                dispatch(getProcesosFail())
            })
    }
}

// PROCESO EN ESPECIFICO
export const getProcesoInit = () => ({
    type: GET_PROCESO_INIT
});

export const getProcesoSuccess = (proceso) => ({
    type: GET_PROCESO,
    payload: proceso
})

export const getProceso403 = (status) => ({
    type: GET_PROCESO_403,
    payload: status
})


export const getProcesoFail = () => ({
    type: GET_PROCESO_FAIL

})

export const getProceso = (id) => {
    return (dispatch, getState) => {
        dispatch(getProcesoInit())
        axios
            .get(`${URL_GLOBAL}/api/proceso/${id}/`, tokenConfig(getState))
            .then(res => {
                dispatch(getProcesoSuccess(res.data))

            }).catch(err => {
                console.log(err)
                dispatch(getProcesoFail())
                dispatch(getProceso403(err.message))
            })
    }
}


export const deleteProceso = id => async (dispatch, getState) => {
    axios
        .delete(`${URL_GLOBAL}/api/proceso/delete/${id}`, tokenConfig(getState))
    dispatch({
        type: DELETE_PROCESO,
        payload: id
    })


}
export const newProcess = post => async (dispatch, getState) => {

    dispatch({
        type: DELETE_LAST_PROCESS,
    })

    axios
        .post(`${URL_GLOBAL}/api/proceso/create/`, post, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: CREATE_PROCESO,
                payload: res.data
            })
            dispatch({
                type: SAVE_LAST_PROCESS,
                payload: res.data.id
            })
        }).catch(error => {
            console.log(error)
        })

}

export const updateProcess = proceso => async (dispatch, getState) => {
    axios
        .put(`${URL_GLOBAL}/api/proceso/update/${proceso.id}`, proceso, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: UPDATE_PROCESO,
                payload: res.data
            })
        }).catch(error => {
            console.log(error)
        })
}

// DETALLE













