/**
 * Created by hong on 2017/1/8.
 */

import Vue from 'vue'
import Vuex from 'vuex';

import manager from './modules/manager';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    manager
  },
  strict: process.env.NODE_ENV !== 'production' //是否开启严格模式
});


export default store
