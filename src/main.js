// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Test from './Test/Test'
import Test2 from './Test/Test2'

/* eslint-disable no-new */


Vue.config.silent = true;



new Vue({
  el: '#apptest',
  template: ' <Test2></Test2>',
  components: { Test2 }
})



/*
new Vue({
 el: '#apptest',
  template: ' <div>hhhh<Test></Test><Test></Test>kkkkk</div>',
  components: { Test }
})
*/

/*


 new Vue({
  el: '#apptest2',
  data: function () {
    return  { message:'kkkkyuan'}
  }
})
*/




/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

*/
