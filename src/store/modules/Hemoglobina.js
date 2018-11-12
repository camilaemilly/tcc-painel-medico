import axios from '../../plugins/axios'
import { date } from 'quasar'

export default {
  state: {
    glicoses: []
  },
  actions: {
    getGlicose ({ commit }, page) {
      axios.get('/glicose')
        .then(res => {
          console.log(res.data)
          commit('setGlicose', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setGlicose (state, data) {
      state.glicoses = data
      state.glicoses.forEach(item => {
        let dataFormatada = date.formatDate(item.dataUltimaMedicao, 'YYYY-MM-DD')
        let arrayData = dataFormatada.split('-', 3)
        item.dataUltimaMedicao = arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0]
      })
    }
  },
  getters: {
    getGlicoses: (state) => {
      return state.glicoses
    }
  }
}
