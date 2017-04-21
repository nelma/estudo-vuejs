<template>
    <button class="botao" :class="estiloDoBotao" :type="tipo" @click="disparaAcao()">{{ rotulo }}</button>
</template>

<script>
    export default {
        //props: ['tipo', 'rotulo', 'confirmacao', 'estilo'],

        props: {
            tipo: {
                type: String,
                required: true
            },
            rotulo: {
                type: String,
                required: true
            },
            confirmacao: Boolean,
            estilo: String
        },

        methods: {
            disparaAcao() {

                if(this.confirmacao) {
                    if(confirm('Confirma operação?')) {
                        this.$emit('botaoAtivado');
                    }
                    return;
                }
                this.$emit('botaoAtivado');
            }
        },

        computed: {
            estiloDoBotao() {
                //se valor padrao ou não passou nada para estilo
                if(this.estilo == 'padrao' || !this.estilo) {
                    return 'botao botao-padrao';
                }

                if(this.estilo == 'perigo') {
                    return 'botao botao-perigo';
                }
            }
        }
    }
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>


