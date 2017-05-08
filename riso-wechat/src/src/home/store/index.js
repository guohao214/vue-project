/**
 * Created by Guohao on 2017/5/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import account from './account'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    account
  }
})

export default store
