import Vue from 'vue';
import plugins from './plugins';
import store from './store';
import App from './App.vue';

import './../assets/app.css'

new Vue({
  el: '#app',
  router: plugins.router,
  store,
  render: h => h(App)
})


