import Vue from 'vue'
import Router from 'vue-router'
import login from './views/Login'
import register from './views/Register'
import tables from './views/Tables'
import logout from './views/Logout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requiresLogged: true
      }
    },
    {
      path: '/tables',
      name: 'tables',
      component: tables,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
