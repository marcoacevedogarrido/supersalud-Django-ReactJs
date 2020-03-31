import {
    // LISTADO PROCESOS
    GET_PROCESOS_INIT,
    GET_PROCESOS_SUCCESS,
    GET_PROCESOS_FAIL,
    //
    DELETE_PROCESO,
    CREATE_PROCESO,
    UPDATE_PROCESO,
    GET_4_FILTER,
    GET_PROCESO_INIT,
    GET_PROCESO,
    GET_PROCESO_FAIL,
    GET_PROCESO_403,
    GET_DATA_PROCESO

} from '../constants/ActionTypes';

const initialState = {
    procesos: [],
    last_entity: '',
    count: '',
    proceso: [],
    documentos: [],
    doc_filters: [],
    error: null,
    loading: true,
    loadingUnique: true,
    errorUnique: null,
    unauthorized: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROCESOS_INIT:
            return {
                ...state,
                loading: true
            }
        case GET_PROCESOS_SUCCESS:
            return {
                ...state,
                procesos: action.payload,
                loading: false,
                error: false
            }
        case GET_DATA_PROCESO:
            return {
                ...state,
                count: action.payload
            }
        case GET_PROCESOS_FAIL:
            return {
                ...state,
                procesos: [],
                loading: false,
                error: true
            }
        case GET_PROCESO_INIT:
            return {
                ...state,
                loadingUnique: true
            }
        case GET_PROCESO:
            return {
                ...state,
                proceso: action.payload,
                loadingUnique: false,
                errorUnique: false,
                unauthorized: ""

            }
        case GET_PROCESO_403:
            return {
                ...state,
                proceso: [],
                loadingUnique: false,
                errorUnique: false,
                unauthorized: action.payload

            }
        case GET_PROCESO_FAIL:
            return {
                ...state,
                proceso: [],
                loadingUnique: false,
                errorUnique: true,
                unauthorized: ""
            }
        case DELETE_PROCESO:
            return {
                ...state,
                procesos: state.procesos.filter(proceso => proceso.id !== action.payload),
                count: state.count - 1
            }
        case CREATE_PROCESO:
            return {
                ...state,
                procesos: [...state.procesos, action.payload]
            }
        case UPDATE_PROCESO:
            return {
                ...state,
                procesos: state.procesos.map(
                    proceso => proceso.id === action.payload.id ? (proceso = action.payload) :
                        proceso
                )
            }
        case GET_4_FILTER:
            return {
                ...state,
                doc_filters: action.payload
            }

        default:
            return state;
    }
}
