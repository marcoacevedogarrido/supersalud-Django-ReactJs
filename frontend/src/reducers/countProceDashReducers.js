import { 
    GET_COUT_PROCESO_INIT,
    GET_COUT_PROCESO_DOCU_SUCCESS,
    GET_COUT_PROCESO_DOCU_FAIL
}   from '../constants/ActionTypes';

const initialState = {
    countProceDash : [],
    error: null,
    loading: false,
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_COUT_PROCESO_INIT:
            return{
                ...state,
                loading: true
            }
        case GET_COUT_PROCESO_DOCU_SUCCESS:
            return{
                ...state,
                countProceDash: action.payload,
                loading: false,
                error: false
            }
        case GET_COUT_PROCESO_DOCU_FAIL:
            return{
                ...state,
                countProceDash: [],
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

