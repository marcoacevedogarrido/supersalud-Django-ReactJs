/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import IdleVue from 'idle-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Slider from '@jeremyhamm/vue-slider'
import vuetify from '@/plugins/vuetify'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ClientTable } from 'vue-tables-2';

import axios from 'axios'
import VueAxios from 'vue-axios'

const eventsHub = new Vue()

Vue.use(ClientTable);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 720000
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuesax, {
 })
Vue.use(Slider)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  }
  else if (to.matched.some(record => record.meta.requiresLogged)) {
    if (store.getters.loggedIn) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
