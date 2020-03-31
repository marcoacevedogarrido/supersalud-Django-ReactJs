import axios from 'axios'
import {
    GET_INFO_PROCESS_COUNT_INIT,
    GET_INFO_PROCESS_COUNT_SUCCESS,
    GET_INFO_PROCESS_COUNT_FAIL
} from 'constants/ActionTypes';

import { URL_GLOBAL } from 'constants/constants'
import { tokenConfig } from '../Auth/Auth';


export const getInfoProcesoInit = () => ({
    type: GET_INFO_PROCESS_COUNT_INIT
});


export const getInfoProcesoSuccess = (infoProcesos) => ({
    type: GET_INFO_PROCESS_COUNT_SUCCESS,
    payload: infoProcesos
})


export const getInfoProcesoFail = () => ({
    type: GET_INFO_PROCESS_COUNT_FAIL

})

export const getInfoProcesos = () => {
    return (dispatch, getState) => {
        dispatch(getInfoProcesoInit)
        axios
        .get(`${URL_GLOBAL}/api/dashboard/count/procesos/user/`, tokenConfig(getState))
        .then(res => {
            dispatch(getInfoProcesoSuccess(res.data))
        }).catch(error => {
            dispatch(getInfoProcesoFail(error))
        })
    }
}

