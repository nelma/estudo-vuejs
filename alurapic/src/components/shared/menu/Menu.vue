<template>
    <nav>
        <ul>
            <li v-for="rota in rotas">
                <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        /*validacao de props*/
        props: {
            rotas: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>