import axios from '../../plugins/axios'

export default {
  state: {
    medicamentos: []
  },
  actions: {
    getMedicamento ({ commit }) {
      commit('zerarArray')
      axios.get('/medicamento')
        .then(res => {
          res.data.content.forEach(element => {
            commit('setMedicamento', element)
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {
    setMedicamento (state, data) {
      state.medicamentos.push({ label: data.nomeMedicamento, value: data.idMedicamento.value })
    },
    zerarArray (state) {
      state.medicamentos = []
    }
  },
  getters: {
    getMedicamentos: (state) => {
      return state.medicamentos
    }
  }
}
