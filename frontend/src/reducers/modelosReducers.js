import { 
    GET_MODELOS_INIT,
    GET_MODELOS_SUCCESS,
    GET_MODELOS_FAIL
}   from '../constants/ActionTypes';

const initialState = {
    modelos : [],
    loading: false,
    error: null,
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_MODELOS_INIT:
            return{
                ...state,
                loading: true
            }
        case GET_MODELOS_SUCCESS:
            return {
                ...state,
                loading:false,
                modelos: action.payload,
                error: false
            }
        case GET_MODELOS_FAIL:
            return{
                ...state,
                modelos: [],
                loading:false,
                error: true
            }
        default:
            return state;
    }
}
