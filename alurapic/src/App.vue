<template>
  <div>
    <h1>{{ titulo }}</h1>
    
    <ul>
      <li><img v-bind:src="foto.url" v-bind:alt="foto.titulo"></li>
    </ul>
     
  </div>
</template>

<script>
export default {
  data() {
    return{
      
      titulo: 'Alurapic',
      fotos: [
        {
          url: 'http://www.farejadordecaes.com.br/wp-content/uploads/o-que-saber-antes-de-comprar-cachorro-01.png',
          titulo: 'Cachorro'
        },
        {
          url: 'http://www.farejadordecaes.com.br/wp-content/uploads/o-que-saber- antes-de-comprar-cachorro-01.png',
          titulo: 'Gato'
        }
      ] 
    }
  }
}
</script>

<style>

</style>
