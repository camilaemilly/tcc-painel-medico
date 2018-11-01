import axios from '../../plugins/axios'

export default {
  state: {
    perfil: {}
  },
  actions: {
    getUsuario ({ commit }) {
      axios.get('/usuario')
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
      state.perfil = data
    }
  },
  getters: {
    getUsuario: (state) => {
      return state.perfil
    }
  }
}
