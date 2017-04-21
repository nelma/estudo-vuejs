import Vue from 'vue'
import App from './App.vue'

//importando modulos
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// tem que vir entre chaves, porque não é default
import { routes } from './routes';


// importando diretivas
import './directives/Transform.js';

//registrando o modulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);

//roteador
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
