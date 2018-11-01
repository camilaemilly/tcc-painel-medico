import axios from '../../plugins/axios'

export default {
  state: {
    doencas: [],
    quantidadeDoencas: 0
  },
  actions: {
    getDoenca ({ commit }) {
      axios.get('/doenca')
        .then(res => {
          commit('setDoenca', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setDoenca (state, data) {
      state.doencas = data
      state.doencas.content.forEach(item => {
        let dataFormatada = item.dataDescoberta.replace(/-/g, '/')
        item.dataDescoberta = dataFormatada
      })
      state.quantidadeDoencas = data.totalElements
    }
  },
  getters: {
    getDoencas: (state) => {
      return state.doencas
    },
    getQuantDoencas: (state) => {
      return state.quantidadeDoencas
    }
  }
}
