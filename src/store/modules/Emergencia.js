import axios from '../../plugins/axios'

export default {
  state: {
    emergencias: [],
    emergenciasPdf: []
  },
  actions: {
    getEmergencia ({ commit }) {
      axios.get('/emergencia')
        .then(res => {
          commit('setEmergencia', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getEmergenciaPdf ({ commit }) {
      axios.get('/emergencia/pdf')
        .then(res => {
          commit('setEmergenciaPdf', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setEmergencia (state, data) {
      let arrayAux = {}
      if (data.diabetes === 0) {
        arrayAux.diabetes = 'Não'
      } else {
        arrayAux.diabetes = 'Sim'
      }
      if (data.hipertensao === 0) {
        arrayAux.hipertensao = 'Não'
      } else {
        arrayAux.hipertensao = 'Sim'
      }
      if (data.ataqueConvulsivos === 0) {
        arrayAux.ataqueConvulsivos = 'Não'
      } else {
        arrayAux.ataqueConvulsivos = 'Sim'
      }
      if (data.doadorDeOrgaos === 0) {
        arrayAux.doadorDeOrgaos = 'Não'
      } else {
        arrayAux.doadorDeOrgaos = 'Sim'
      }
      state.emergencias = arrayAux
    },
    setEmergenciaPdf (state, data) {
      state.emergenciasPdf = data
    }
  },
  getters: {
    getEmergencias: (state) => {
      return state.emergencias
    },
    getEmergenciasPdf: (state) => {
      return state.emergenciasPdf
    }
  }
}
