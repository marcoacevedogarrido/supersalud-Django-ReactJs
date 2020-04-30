import axios from 'axios'
import {
    HIDE_MESSAGE,
    INIT_URL,
    ON_HIDE_LOADER,
    ON_SHOW_LOADER,
    SHOW_MESSAGE,
    LOGIN_SUCCESS,
    SIGNOUT_USER_SUCCESS,
    SIGNUP_USER,
    USER_LOADED,
    USER_LOADING,
    SIGNOUT_USER_FAIL

} from '../../constants/ActionTypes';

import { URL_GLOBAL } from '../../constants/constants'

import Swal from 'sweetalert2';

export const loadUser = () => (dispatch, getState) => {

    dispatch({ type: USER_LOADING})

    axios.get(`${URL_GLOBAL}/api/auth/user`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: SIGNOUT_USER_FAIL
            })
        })
}

export const userSignIn = (username, password) => dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, password });

    axios.post(`${URL_GLOBAL}/api/auth/login`, body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Credenciales Incorrectas',
                
            })
            dispatch({
                type: SIGNOUT_USER_SUCCESS
            })
            
        })
};

export const tokenConfig = getState => {
    // OBTENER EL TOKEN DE STATE
    const token = getState().auth.token;

    //HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //SI EXISTE TOKEN AÑADE HEADERS CONFIG
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;

    }

    return config;
}

export const userSignOut = () => (dispatch, getState) => {
    axios.post(`${URL_GLOBAL}/api/auth/logout/`, null, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: SIGNOUT_USER_SUCCESS
        })
    }).catch(error => {
        dispatch({
            type: SIGNOUT_USER_SUCCESS
        })
    })
};

export const userSignUp = (user) => {
    return {
        type: SIGNUP_USER,
        payload: user
    };
};


export const userSignUpSuccess = (user) => {
    return {
        
        payload: user
    };
};

export const userSignInSuccess = (user) => {
    return {
        
        payload: user
    }
};
export const userSignOutSuccess = () => {
    console.log("userSignOutSuccess")
};

export const showAuthMessage = (message) => {
    return {
        type: SHOW_MESSAGE,
        payload: message
    };
};
export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    };
};
export const showAuthLoader = () => {
    return {
        type: ON_SHOW_LOADER,
    };
};

export const hideMessage = () => {
    return {
        type: HIDE_MESSAGE,
    };
};
export const hideAuthLoader = () => {
    return {
        type: ON_HIDE_LOADER,
    };
};
