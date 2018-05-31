import Vue from 'vue';
import App from './App.vue';
// routing
import {
  sync
} from 'vuex-router-sync';
import router from './router';
import store from './store';

sync(store, router)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

// import Vue from 'vue';
// import {
//   sync
// } from 'vuex-router-sync';

// import App from './components/App.vue';
// import router from './router';
// import store from './store';

// sync(store, router);

// const app = new Vue({
//   router,
//   store,
//   ...App
// })

// export {
//   app,
//   router,
//   store
// }


// app.$mount('#app');
