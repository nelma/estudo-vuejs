<template>
  <div>
    <h1>{{ titulo }}</h1>

    <img v-bind:src="foto.url" v-bind:alt="foto.titulo">

  </div>
</template>

<script>
export default {
  data() {
    return{
      titulo: 'Alurapic',
      foto: {
        url: 'http://www.farejadordecaes.com.br/wp-content/uploads/o-que-saber-antes-de-comprar-cachorro-01.png',
        titulo: 'Cachorro'
      }
    }
  }
}
</script>

<style>

</style>
