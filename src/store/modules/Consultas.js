import axios from '../../plugins/axios'
import { date } from 'quasar'

export default {
  state: {
    consultas: []
  },
  actions: {
    getConsultas ({commit}) {
      axios.get('/consulta')
        .then(res => {
          commit('setConsulta', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setConsulta (state, data) {
      state.consultas = data
      state.consultas.forEach(item => {
        let dataFormatada = date.formatDate(item.data, 'YYYY-MM-DD')
        let arrayData = dataFormatada.split('-', 3)
        item.data = arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0]
      })
    }
  },
  getters: {
    getConsultas: (state) => {
      return state.consultas
    }
  }
}
