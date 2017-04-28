<template>

  <div>

    <h1 class="centralizado">Alurapic</h1>

    <!-- elemento para exibir msg para o usuário -->
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

    <input type="search" class="filtro" v-on:input=" filtro = $event.target.value" placeholder="filtre pelo título da foto">
    {{ filtro }}

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animacao="1.2" />

            <router-link :to="{ name: 'altera', params: { id: foto._id } }">
              <meu-botao rotulo="Alterar" tipo="button" />
            </router-link>

            <meu-botao rotulo="Remover"
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

//importando diretivas
import transform from '../../directives/Transform';

//importando um Servico
import FotoService from '../../domain/foto/FotoService';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  directives: {
    'meu-transform': transform
  },

  methods: {
    remover(foto) {

        this.service.apaga(foto._id)
                    .then(() => {
                      let indice = this.fotos.indexOf(foto);
                      this.fotos.splice(indice, 1);
                      this.mensagem = 'Foto removida com sucesso'
                    }, err => {
                      this.mensagem = 'Nao foi possivel remover a foto';
                      console.log(err);
                    })

        /* this.resource.delete( {id: foto._id})
                  .then(() => {
                    let indice = this.fotos.indexOf(foto);
                    this.fotos.splice(indice, 1);
                    this.mensagem = 'Foto removida com sucesso'
                  }, err => {
                    this.mensagem = 'Nao foi possivel remover a foto';
                    console.log(err);
                  }) */

    }
  },

  data() {
    return{
      fotos: [],
      filtro: '',
      mensagem: ''
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

     // criando uma instância do nosso serviço que depende de $resource
    this.service = new FotoService(this.$resource);

    this.service.lista().then(fotos => this.fotos = fotos, err => console.log(err));

    //this.resource = this.$resource('v1/fotos{/id}');

    //this.resource.query().then(res => res.json()).then(fotos => this.fotos = fotos, err => console.log(err));

    /*this.$http.get('v1/fotos')
      .then(res => res.json())
      .then(fotinhos => this.fotos = fotinhos, err => console.log(err));*/
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
