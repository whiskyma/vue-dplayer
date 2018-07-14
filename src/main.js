import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
window.Hls = require('hls.js');

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
