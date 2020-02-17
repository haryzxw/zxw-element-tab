import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'


Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      demo:'',
    },
    getters,
    mutations,
    actions
  })
}
