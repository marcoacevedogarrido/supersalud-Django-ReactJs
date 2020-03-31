import { 
    GET_NOTIFICATIONS_INIT,
    GET_NOTIFICATIONS_SUCCESS,
    GET_NOTIFICATIONS_FAIL
}   from '../constants/ActionTypes';

const initialState = {
    notificaciones : [],
    isLoading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_NOTIFICATIONS_INIT:
            return{
                ...state,
                isLoading: true
            }
        case GET_NOTIFICATIONS_SUCCESS:
            return{
                ...state,
                notificaciones: action.payload,
                isLoading: false
            }
        case GET_NOTIFICATIONS_FAIL:
            return{
                ...state,
                notificaciones: [],
                isLoading: false
            }
        default:
            return state;
    }
}

