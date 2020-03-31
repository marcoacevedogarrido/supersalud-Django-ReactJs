import axios from 'axios'
import {
    GET_NOTIFICATIONS_INIT,
    GET_NOTIFICATIONS_SUCCESS,
    GET_NOTIFICATIONS_FAIL,
} from 'constants/ActionTypes';

import { URL_GLOBAL } from 'constants/constants'
import { tokenConfig } from '../Auth/Auth';


export const getNotificationsInit = () => ({
    type: GET_NOTIFICATIONS_INIT
});


export const getNotificationSuccess = (notificaciones) => ({
    type: GET_NOTIFICATIONS_SUCCESS,
    payload: notificaciones
})


export const notificationesFail = () => ({
    type: GET_NOTIFICATIONS_FAIL

})

export const getNotifications = () => {
    return (dispatch, getState) => {
        dispatch(getNotificationsInit)
        axios
        .get(`${URL_GLOBAL}/api/proceso/notificaciones/`, tokenConfig(getState))
        .then(res => {
            dispatch(getNotificationSuccess(res.data.results))
        }).catch(error => {
            dispatch(notificationesFail(error))
        })
    }
}