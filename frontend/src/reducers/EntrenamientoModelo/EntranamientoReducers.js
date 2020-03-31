import {
    GET_DOC_TRAINING_INIT,
    GET_DOC_TRAINING_SUCCESS,
    GET_DOC_TRAINING_DATA,
    GET_DOC_TRAINING_FAIL,

} from '../../constants/ActionTypes';

const initialState = {
    docuEntrenamiento: [],
    count: '',
    error: null,
    loading: true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DOC_TRAINING_INIT:
            return {
                ...state,
                loading: true
            }
        case GET_DOC_TRAINING_SUCCESS:
            return {
                ...state,
                docuEntrenamiento: action.payload,
                loading: false,
                error: false
            }
        case GET_DOC_TRAINING_DATA:
            return {
                ...state,
                count: action.payload
            }
        case GET_DOC_TRAINING_FAIL:
            return {
                ...state,
                docuEntrenamiento: action.payload,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}
