import {
    GET_LAST_PROCESS_SUCCESS,

    GET_INFO_PROCESS_COUNT_INIT,
    GET_INFO_PROCESS_COUNT_SUCCESS,
    GET_INFO_PROCESS_COUNT_FAIL


} from '../constants/ActionTypes';

const initialState = {
    lastProcess: [],
    infoProcesos: [],
    loadingInfo: true,
    errorInfo: null

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LAST_PROCESS_SUCCESS:
            return {
                ...state,
                lastProcess: action.payload
            }
        case GET_INFO_PROCESS_COUNT_INIT:
            return {
                ...state,
                loadingInfo: true

            }
        case GET_INFO_PROCESS_COUNT_SUCCESS:
            return {
                ...state,
                infoProcesos: action.payload,
                loadingInfo: false,
                errorInfo: false

            }
        case GET_INFO_PROCESS_COUNT_FAIL:
            return {
                ...state,
                infoProcesos: [],
                loadingInfo: false,
                errorInfo: true

            }
        default:
            return state;
    }
}

