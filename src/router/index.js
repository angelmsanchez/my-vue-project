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
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log("to: ", to);
        console.log("from: ", from);
        setTimeout(() => {
          console.log('setTimeout');
          next();
        }, 3000);
      }
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
    },
    {
      path: '*',
      component: Home
    }
  ]
})
