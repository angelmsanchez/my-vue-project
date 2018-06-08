import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home';
const Counter = resolve => {
  require.ensure([], () => {
    resolve(require('./../views/Counter'))
  })
}
const User = resolve => {
  require.ensure([], () => {
    resolve(require('./../views/User'))
  })
}
const Test = resolve => {
  require.ensure([], () => {
    resolve(require('./../views/Test'))
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    }, {
      path: '/home',
      component: Home,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        console.log("to: ", to.matched.some);
        if (to.matched.some(record => record.meta.requiresAuth)) {
          console.log("record: ");
          // this route requires auth, check if logged in
          // if not, redirect to login page.
        }
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
      path: '/test',
      component: Test
    },
    {
      path: '*',
      component: Home
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log('scrollBehavior');
    return {
      x: 0,
      y: 0
    };
  }
})
