import axios from 'axios'
import store from '../store'
const APIUrl = 'http://127.0.0.1:8000'

const axiosBase = axios.create({
  baseURL: APIUrl,
  headers: { contentType: 'application/json' }
})
const getAPI = axios.create({
  baseURL: APIUrl
})
getAPI.interceptors.response.use(undefined, function (err) {
  if (err.config && err.response && err.response.status === 401) {
    store.dispatch('refreshToken')
      .then(access => {
        axios.request({
          baseURL: APIUrl,
          method: 'get',
          headers: { Authorization: `Bearer ${access}` },
          url: '/home/'
        }).then(response => {
          console.log('Success')
          store.state.APIData = response.data
        }).catch(err => {
          console.log('')
          return Promise.reject(err)
        })
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
})

export { axiosBase, getAPI }
