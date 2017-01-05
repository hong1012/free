// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import AppMenu from './Menu'
import AppData from './AppData'


import Hello from './components/Hello.vue'
import Hello2 from './components/Hello2.vue'

import FreeBillManager from './components/FreeBillManager.vue'
import CostDefine from './components/CostDefine.vue'
import CostPay from './components/CostPay.vue'
import CostForm from './components/CostForm.vue'
import FreeBillProgress from './components/FreeBillProgress.vue'

/* eslint-disable no-new */




Vue.use(VueRouter)

Vue.use(ElementUI)




const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: FreeBillManager },
    { path: '/manager', component: FreeBillManager },
    { path: '/define', component: CostDefine },
    { path: '/costpay', component: CostPay },
    { path: '/costform', component: CostForm },
    { path: '/progress', component: FreeBillProgress },
    { path: '/hello', component: Hello },
    { path: '/hello2', component: Hello2 }
  ]
})


function showApp() {
  new Vue({
    router,
    template: `<AppMenu></AppMenu>`,
    components: {
      AppMenu
    }
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




