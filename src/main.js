// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
//import AppMenu from './Menu'
import AppData from './AppData'


import BillManager from './components/BillManager/BillManager.vue'
import CostDefine from './components/CostDefine.vue'
import CostPay from './components/CostPay.vue'
import CostForm from './components/CostForm.vue'
import BillProgress from './components/BillProgress.vue'

/* eslint-disable no-new */


Vue.use(VueRouter)

Vue.use(ElementUI)


import store from './store/store'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: BillManager},
    {path: '/manager', component: BillManager},
    {path: '/define', component: CostDefine},
    {path: '/costpay', component: CostPay},
    {path: '/costform', component: CostForm},
    {path: '/progress', component: BillProgress}
  ]
})


function showApp() {
  new Vue({
    router,
    template: `<App></App>`,
    components: {
      App
    },
    store:store
  }).$mount('#app')
}

//showApp();

AppData.initApp(showApp);

/*
 new Vue({
 router,
 template: `
 <div id="app">
 <ul>
 <li><router-link to="/">/</router-link></li>
 <li><router-link to="/hello">/hello</router-link></li>
 <li><router-link to="/hello2">/hello2</router-link></li>
 </ul>
 <router-view class="view"></router-view>
 </div>
 `
 }).$mount('#app')*/



/*
 new Vue({
 el: '#apptest',
 template: ' <Test2></Test2>',
 components: { Test2 }
 })
 */




