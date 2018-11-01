import Vue from 'vue'
import Vuex from 'vuex'

import alergia from './modules/Alergia'
import cirurgia from './modules/Cirurgia'
import doenca from './modules/Doenca'
import emergencia from './modules/Emergencia'
import login from './modules/Login'
import medicamento from './modules/Medicamento'
import usuario from './modules/Usuario'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      alergia,
      cirurgia,
      doenca,
      emergencia,
      login,
      medicamento,
      usuario
    }
  })

  return Store
}
