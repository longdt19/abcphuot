import Vue from 'vue'
import Vuex from 'vuex'
import {STORE_KEY} from '../constants'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({
    key: STORE_KEY,
    reducer (state) {
      return {
        Common: state.Common
      }
    }
  })]
})

export default store
