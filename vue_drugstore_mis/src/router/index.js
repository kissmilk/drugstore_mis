import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login'
import Register from '../views/register'
import Home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
