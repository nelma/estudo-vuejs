import Vue from 'vue'
import App from './App.vue'

//importando modulos
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

// tem que vir entre chaves, porque não é default
import { routes } from './routes';

import msg from './pt_BR';

//importando o CSS/JS dentro do node_modules
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './assets/css/teste.css';
import './assets/js/teste.js';


// importando diretivas
//import './directives/Transform.js';

//registrando o modulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

//roteador
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {
  req.headers.set('Authorization', 'informacao de seguranca');
  console.log('Lidando com request');

  next(res => {
      console.log('Lidando com a resposta')
      // é possível acessar os dados da reposta e realizar transformações antes
      console.log(res.body);
  });
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
