import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './routes.js'
import i18n from './plugins/i18n';

Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history'})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n
})
