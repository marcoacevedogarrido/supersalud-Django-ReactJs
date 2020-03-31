import {
    GET_USUARIOS_INIT,
    GET_USUARIOS_SUCCESS,
    GET_USUARIOS_FAIL,
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_INIT

} from '../constants/ActionTypes';

const initialState = {
    usuarios: [],
    loading: true,
    error: null,
    errorNewUser: null,
    loadingNew: false,
    url_success: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USUARIOS_INIT:
            return {
                ...state,
                loading: true,
                url_success: ''
            }
        case GET_USUARIOS_SUCCESS:
            return {
                ...state,
                url_success: '',
                usuarios: action.payload,
                loading: false,
                error: false
            }
        case GET_USUARIOS_FAIL:
            return {
                ...state,
                url_success: '',
                usuarios: [],
                loading: false,
                error: true
            }
        case CREATE_USER_INIT:
                return {
                    ...state,
                    url_success: '',
                    loadingNew: true,
                    errorNewUser: false
                }
        case CREATE_USER:
            return {
                ...state,
                usuarios: [...state.usuarios, action.payload],
                url_success: '/app/administrar',
                loadingNew: false,
                errorNewUser: false
            }
        case CREATE_USER_FAIL:
            return{
                ...state,
                url_success: '',
                loadingNew: false,
                errorNewUser: true
            }
        default:
            return state;
    }
}
