import axios from '../../plugins/axios'
import { date } from 'quasar'

export default {
  state: {
    remedios: []
  },
  actions: {
    getRemedios ({commit}) {
      axios.get('/remedio')
        .then(res => {
          console.log(res)
          commit('setRemedios', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setRemedios (state, data) {
      state.remedios = data
      state.remedios.forEach(item => {
        let dataFormatadaInicio = date.formatDate(item.dataInicio, 'YYYY-MM-DD')
        let arrayDataInicio = dataFormatadaInicio.split('-', 3)
        item.dataInicio = arrayDataInicio[2] + '/' + arrayDataInicio[1] + '/' + arrayDataInicio[0]

        let dataFormatadaFim = date.formatDate(item.dataFim, 'YYYY-MM-DD')
        let arrayDataFim = dataFormatadaFim.split('-', 3)
        item.dataFim = arrayDataFim[2] + '/' + arrayDataFim[1] + '/' + arrayDataFim[0]
      })
    }
  },
  getters: {
    getRemedios: (state) => {
      return state.remedios
    }
  }
}
