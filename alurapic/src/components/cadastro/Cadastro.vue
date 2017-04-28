<template>

  <div>
    <h1 v-if="foto._id" class="centralizado">Alteração</h1>
    <h1 v-else class="centralizado">Inclusão</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url" @input="foto.url = $event.target.value">
        <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao" @input="foto.descricao = $event.target.value"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link :to="{name: 'home'}"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';

/*importando a classe Foto*/
import Foto from '../../domain/foto/Foto';

import FotoService from '../../domain/foto/FotoService';

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  methods: {
    grava() {

      //$router é o objeto que sabe tudo sobre a navegação e é diferente de $route

      this.service
        .cadastra(this.foto)
        .then(() => {
          if(this.id) this.$router.push({ name: 'home' });
          this.foto = new Foto()
        },
        err => console.log(err));
      /* this.resource.save(this.foto)
                .then(()=> this.foto = new Foto(), err => console.log(err)); */
    }
  },

  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id
    }
  },

  created() {
    this.service = new FotoService(this.$resource);

    //this.resource = this.$resource('v1/fotos{/id}');

    if(this.id) {
      this.service.busca(this.id)
                  .then(foto => this.foto = foto);
    }
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>
