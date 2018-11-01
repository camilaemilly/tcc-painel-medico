import axios from '../../plugins/axios'

export default {
  state: {
    alergias: [],
    quantidadeAlergias: 0
  },
  actions: {
    getAlergia ({ commit }) {
      axios.get('/alergia')
        .then(res => {
          commit('setAlergia', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setAlergia (state, data) {
      state.alergias = data
      state.alergias.content.forEach(item => {
        let dataFormatada = item.dataDescoberta.replace(/-/g, '/')
        item.dataDescoberta = dataFormatada
      })
      state.quantidadeAlergias = data.totalElements
    }
  },
  getters: {
    getAlergias: (state) => {
      return state.alergias
    },
    getQuantAlergias: (state) => {
      return state.quantidadeAlergias
    }
  }
}
