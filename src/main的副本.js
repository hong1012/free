// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'


import App from './App'
import Test from './Test/Test'
import Test2 from './Test/Test2'

import Hello from './components/Hello.vue'
import Hello2 from './components/Hello2.vue'

/* eslint-disable no-new */




Vue.use(VueRouter);


const Home = { template: '<div>home</div>' }


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Hello },
    { path: '/hello', component: Hello },
    { path: '/hello2', component: Hello2 }
  ]
})


/*new Vue({
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
}).$mount('#app')



/*
new Vue({
  el: '#apptest',
  template: ' <Test2></Test2>',
  components: { Test2 }
})
*/




