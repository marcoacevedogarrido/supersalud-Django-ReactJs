import {
    GET_LAST_PROCESS_SUCCESS,
} from '../constants/ActionTypes';

import axios from 'axios';

import {tokenConfig} from './Auth/Auth'

import {URL_GLOBAL} from '../constants/constants'

export const getLastProcess = () =>  async (dispatch, getState) => { 
    axios
    .get(`${URL_GLOBAL}/api/dashboard/usuario/lastprocess/`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_LAST_PROCESS_SUCCESS,
            payload: res.data.results
        })
    }).catch(err => console.log(err))
}
