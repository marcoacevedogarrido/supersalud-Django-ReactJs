import {
    GET_ENTITIES_INIT,
    GET_ENTITIES_SUCCESS,
    GET_ENTITIES_FAIL
} from '../../constants/ActionTypes';

import axios from 'axios';
import { tokenConfig } from '../Auth/Auth';

import {URL_GLOBAL} from '../../constants/constants'


export const getEntitiesInit = () => ({
    type: GET_ENTITIES_INIT
});


export const getEntitieSucess = (entities) => ({
    type: GET_ENTITIES_SUCCESS,
    payload: entities
})


export const getEntitieFail = () => ({
    type: GET_ENTITIES_FAIL

})


export const getEntities = id => {
    return (dispatch, getState) => {
        dispatch(getEntitiesInit())
        axios
            .get(`${URL_GLOBAL}/api/modelo/entities/${id}/`, tokenConfig(getState))
            .then(res => {
                dispatch(getEntitieSucess(res.data.ModeloEntities))
            }).catch(error => {
                dispatch(getEntitieFail())
            })
    }
}




