import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
     documentos: []
  },
  actions: {
    loadDocumentos ({ commit }) {
      axios
        .get('http://127.0.0.1:8000/api/afectados/')
        .then(r => r.data)
        .then(documentos => {
        commit('SET_DOCUMENTOS', documentos)
        })
    }
  },
  mutations: {
    SET_DOCUMENTOS (state, documentos) {
      state.documentos = documentos
    }
  }
})