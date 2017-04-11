import Vue from 'vue'
import App from './App.vue'

//importando modulos
import VueResource from 'vue-resource';


//registrando o modulo/plugin no global view object
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
