import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';

import {
  sync
} from 'vuex-router-sync';

import router from './router';
import store from './store';

sync(store, router)

const theme = {
  theme: {
    primary: '#366897',
  },
};
Vue.use(Vuetify, theme);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
