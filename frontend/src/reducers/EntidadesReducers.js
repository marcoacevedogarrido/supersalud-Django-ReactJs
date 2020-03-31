import {
    SAVE_LAST_PROCESS,
    GET_ENTITIES_INIT,
    GET_ENTITIES_SUCCESS,
    GET_ENTITIES_FAIL,
    DELETE_LAST_PROCESS
} from '../constants/ActionTypes';

const initialState = {
    last_process_id: '',
    id_ultimo_proceso: localStorage.getItem("id_ultimo_proceso"),
    entities: [],
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_LAST_PROCESS:
            localStorage.removeItem('id_ultimo_proceso')
            return {
                ...state,
                last_process_id: ''
            }
        case SAVE_LAST_PROCESS:
            localStorage.setItem('id_ultimo_proceso', action.payload);
            return {
                ...state,
                last_process_id: action.payload
            }

        case GET_ENTITIES_INIT:
            return {
                ...state,
                loading: true,
            }
        case GET_ENTITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                entities: action.payload,
                error: false
            }
        case GET_ENTITIES_FAIL:
            return {
                ...state,
                last_process_id: '',
                entities: [],
                loading: false,
                error: true
            }
        default:
            return state;
    }
}
