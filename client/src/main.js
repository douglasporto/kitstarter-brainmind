import Vue from 'vue';
import App from './App.vue';
import router from './config/router';
import store from './config/store';
import http from './config/utils/http';
import './config/utils/helpers/';
import './config/serviceWork/registerServiceWorker';
import './config/utils/validate/';

Vue.use(http);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
