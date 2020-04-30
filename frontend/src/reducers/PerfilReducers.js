import {
    CHANGE_PASS_INIT,
    CHANGE_PASS_SUCCESS,
    CHANGE_PASS_FAIL

} from '../constants/ActionTypes';

const initialState = {
    loading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_PASS_INIT:
            return {
                ...state,
                loading: true,
            }
        case CHANGE_PASS_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                loading: false,
                error: false,
            }
        case CHANGE_PASS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}
