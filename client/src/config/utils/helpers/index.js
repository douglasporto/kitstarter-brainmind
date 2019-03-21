import Vue from 'vue';

const helpers = {};

const helper = {
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  }
};

Vue.use(helper);
