import axios from '../../plugins/axios'
import { Loading, Notify } from 'quasar'
export default {
  state: {
    token: ''
  },
  actions: {
    login ({ commit }, json) {
      console.log(json.identificador)
      commit('zerarArray')
      Loading.show()
      axios.post('/api/token', {
        identificador: json.identificador
      })
        .then(res => {
          window.localStorage.setItem('token', res.data)
          axios.defaults.headers.common['token'] = res.data
          commit('setToken', res.data)
          Loading.hide()
          this.$router.push('/home')
        }).catch(err => {
          console.log(err)
          Notify.create({
            message: err.response.data.error,
            type: 'negative',
            position: 'top'
          })
          Loading.hide()
        })
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    zerarArray (state) {
      state.token = ''
    }
  },
  getters: {
    getToken: (state) => {
      return state.token
    }
  }
}
