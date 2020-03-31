import {
    GET_4_FILTER_INIT,
    GET_4_FILTER,
    GET_4_FILTER_FAIL,
} from '../../constants/ActionTypes';

import axios from 'axios';
import { tokenConfig } from '../Auth/Auth';

import { URL_GLOBAL } from '../../constants/constants'

export const get4CardInit = () => ({
    type: GET_4_FILTER_INIT
});

export const get4CardSuccess = (datos) => ({
    type: GET_4_FILTER,
    payload: datos
})

export const get4CardFail = () => ({
    type: GET_4_FILTER_FAIL

})

export const get4Filter = (id) => {
    return (dispatch, getState) => {
        dispatch(get4CardInit)
        axios
            .get(`${URL_GLOBAL}/api/count/etapas/${id}/`, tokenConfig(getState))
            .then(res => {
                dispatch(dispatch(get4CardSuccess(res.data)))
            }).catch(error => {
                dispatch(get4CardFail())
            })
    }
}


