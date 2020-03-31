import {
    GET_DOC_INIT,
    GET_DOC_FILTER,
    GET_DOC_FAIL,
    UPDATE_DOCUMENTO,
    GET_DATA_DOCUMENTO

} from '../constants/ActionTypes';

const initialState = {
    documentos: [],
    count: '',
    error: null,
    loading: true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DOC_INIT:
            return {
                ...state,
                loading: true
            }
        case GET_DOC_FILTER:
            return {
                ...state,
                documentos: action.payload,
                loading: false,
                error: false
            }
        case GET_DATA_DOCUMENTO:
            return {
                ...state,
                count: action.payload
            }
        case GET_DOC_FAIL:
            return {
                ...state,
                documentos: action.payload,
                loading: false,
                error: true
            }
        case UPDATE_DOCUMENTO:
            return {
                ...state,
                documentos: state.documentos.map(
                    documento => documento.id === action.payload.id
                        ? (documento = action.payload)
                        : documento
                ),
                count: state.count - 1
            }
        default:
            return state;
    }
}
