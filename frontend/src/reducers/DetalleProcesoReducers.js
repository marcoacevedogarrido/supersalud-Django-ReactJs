import { 
    GET_4_FILTER_INIT,
    GET_4_FILTER,
    GET_4_FILTER_FAIL
}   from '../constants/ActionTypes';

const initialState = {
    datos : [],
    loading: true,
    error: null,
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_4_FILTER_INIT:
            return{
                ...state,
                loading: true
            }
        case GET_4_FILTER:
            return {
                ...state,
                loading:false,
                error: false,
                datos: action.payload,
            }
        case GET_4_FILTER_FAIL:
            return{
                ...state,
                datos: [],
                loading:false,
                error: true
            }
        default:
            return state;
    }
}
