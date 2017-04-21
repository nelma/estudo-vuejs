<template>

  <div>

    <h1 class="centralizado">Alurapic</h1>
    
    <input type="search" class="filtro" v-on:input=" filtro = $event.target.value" placeholder="filtre pelo título da foto">
    {{ filtro }}

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
          
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animacao="1.2" />
            <meu-botao rotulo="remover" 
                       tipo="button" 
                       :confirmacao="true" 
                       @botaoAtivado="remover(foto)"
                       estilo="perigo" />
          </meu-painel>
               
      </li>
    </ul>
     
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  methods: {
    remover(foto) {
        alert(foto.titulo);
    }
  },

  data() {
    return{
      fotos: [],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro() {
      let filtro = this.filtro;
      let fotos = this.fotos;

      if(filtro) {
        //filtra a lista

        //cria expressao com valor do filtro
        let exp = new RegExp(filtro.trim(), 'i');

        //retorna fotos que condizem a expressao
        return fotos.filter(foto => exp.test(foto.titulo));
      } else {
        //se estiver vazio, retorna a lista toda
        return fotos;
      }
    }
  },

  created() {
    //alert("Criei o componente");

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotinhos => this.fotos = fotinhos, err => console.log(err));
  }
}
</script>

<style>
    .centralizado {
      text-align: center;
    }

    .lista-fotos {
      list-style: none;
    }

    .lista-fotos .lista-fotos-item {
      display: inline-block;
    }

    /* código anterior omitido */

  .filtro {
    display: block;
    width: 100%;
  }
</style>
