import axios from '../../plugins/axios'

/*eslint-disable */
export default {
  state: {
    usuarios: []
  },
  actions: {
    getUsuario ({ commit }) {
      axios.get('/api/usuario')
        .then(res => {
          commit('setUsuario', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setUsuario (state, data) {
      state.usuarios = data
    }
  },
  getters: {
    getUsuario: (state) => {
      return state.usuarios
    }
  }
}
