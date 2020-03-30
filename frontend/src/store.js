import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { axiosBase } from './api/axios-base'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
     accessToken: localStorage.getItem('access_token') || null,
     refreshToken: localStorage.getItem('refresh_token') || null,
     APIData: '',
     documentos: []
  },
  getters: {
    loggedIn (state) {
      return state.accessToken != null
    }
  },
  mutations: {
    SET_DOCUMENTOS (state, documentos) {
      state.documentos = documentos
    },
    updateLocalStorage (state, { access, refresh }) {
      localStorage.setItem('access_token', access)
      localStorage.setItem('refresh_token', refresh)
      state.accessToken = access
      state.refreshToken = refresh
    },
    updateAccess (state, access) {
      state.accessToken = access
    },
    destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
    }
  },
  actions: {
    loadDocumentos ({ commit }) {
      axios
        .get('http://127.0.0.1:8000/api/afectados/')
        .then(r => r.data)
        .then(documentos => {
        commit('SET_DOCUMENTOS', documentos)
        })
    },
    refreshToken (context) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/api/token/refresh/', {
          refresh: context.state.refreshToken
        })
          .then(response => {
            console.log('access successfully')
            context.commit('updateAccess', response.data.access)
            resolve(response.data.access)
          })
          .catch(err => {
            console.log('error')
            reject(err)
          })
      })
    },
    registerUser (context, data) {
      return new Promise((resolve, reject) => {
        axiosBase.post('api/register', {
          name: data.name,
          email: data.email,
          username: data.username,
          password: data.password,
          confirm: data.confirm
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    loginUser (context, credentials) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/api/token/', {
          username: credentials.username,
          password: credentials.password
        })
          .then(response => {
            context.commit('updateLocalStorage', { access: response.data.access, refresh: response.data.refresh })
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    logoutUser (context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axiosBase.post('/api/token/logout/')
            .then(response => {
              localStorage.removeItem('access_token')
              localStorage.removeItem('refresh_token')
              context.commit('destroyToken')
            })
            .catch(err => {
              localStorage.removeItem('access_token')
              localStorage.removeItem('refresh_token')
              context.commit('destroyToken')
              resolve(err)
            })
        })
      }
    }
  }
})
