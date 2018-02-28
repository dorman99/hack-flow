import Vue from 'vue'
import Router from 'vue-router'
import landingpage from '../components/pagelanding'
import bodyvue from '../components/bodyvue.vue'
import store from '../store.js'
import profile from '../components/profile.vue'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'body',
      component: bodyvue
    },
    {
      path: '/login',
      name: 'login',
      component: landingpage
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('aa', store.state.token)
  if (!localStorage.getItem('token')) {
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next(false)
    } else {
      next()
    }
  }
})

export default router
