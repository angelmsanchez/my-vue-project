import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home';
import Counter from './../views/Counter';
import User from './../views/User';

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
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
})
