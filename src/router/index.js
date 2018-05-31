import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home';
import Counter from './../views/Counter';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    }, {
      path: '/home',
      component: Home
    },
    {
      path: '/counter',
      component: Counter
    }
  ]
})
