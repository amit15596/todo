import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Register from'./components/Registration';
import List from'./components/List';

import './scss/main.scss'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:List
  },
  {
    path:'/register',
    component:Register
  }  
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
