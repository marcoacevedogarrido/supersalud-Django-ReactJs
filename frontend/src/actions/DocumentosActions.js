import {
    GET_DOC_FILTER,
    UPDATE_DOCUMENTO,
    GET_DATA_DOCUMENTO


} from '../constants/ActionTypes';

import { URL_GLOBAL } from '../constants/constants'
import { tokenConfig } from './Auth/Auth'

import axios from 'axios';


// 


export const getDocFilter = (id, type_doc, page) => async (dispatch, getState) => {
    axios
        .get(`${URL_GLOBAL}/api/tipo-doc/filter/${id}/${type_doc}/?page=${page}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_DOC_FILTER,
                payload: res.data.results
            })
            dispatch({
                type: GET_DATA_DOCUMENTO,
                payload: res.data.count
            })
        }).catch(error => {
            console.log(error)
        })

}


export const updateDocumento = documento => async (dispatch, getState) => {
    axios
        .put(`${URL_GLOBAL}/api/update/documento/${documento.id}`, documento, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: UPDATE_DOCUMENTO,
                payload: res.data
            })
        }).catch(error => {
            console.log(error)
        })

}
