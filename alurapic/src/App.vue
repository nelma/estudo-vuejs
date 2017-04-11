<template>
  <div>
    <h1>{{ titulo }}</h1>
    
    <ul>
      <li v-for="foto of fotos">
        <img v-bind:src="foto.url" v-bind:alt="foto.titulo">
      </li>
    </ul>
     
  </div>
</template>

<script>
export default {
  data() {
    return{
      
      titulo: 'Alurapic',
      fotos: [] 
    }
  },
  created() {
    //alert("Criei o componente");

    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
      .then(res => res.json())
      .then(fotinhos => this.fotos = fotinhos, err => console.log(err));
  }
}
</script>

<style>

</style>
