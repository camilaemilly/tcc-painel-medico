import axios from '../../plugins/axios'

export default {
  state: {
    cirurgias: [],
    quantidadeCirurgias: 0
  },
  actions: {
    getCirurgia ({ commit }) {
      axios.get('/cirurgia')
        .then(res => {
          commit('setCirurgia', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setCirurgia (state, data) {
      state.cirurgias = data
      state.cirurgias.content.forEach(item => {
        let dataFormatada = item.dataCirurgia.replace(/-/g, '/')
        item.dataCirurgia = dataFormatada
      })
      state.quantidadeCirurgias = data.totalElements
    }
  },
  getters: {
    getCirurgias: (state) => {
      return state.cirurgias
    },
    getQuantCirurgias: (state) => {
      return state.quantidadeCirurgias
    }
  }
}
