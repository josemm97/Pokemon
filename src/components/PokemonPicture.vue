<template>
  <div class="pokemon-container">
    <img
      :src="imgSrc"
      alt="pokemon"
      class="hidden-pokemon"
    >
    <img
      v-if="showpokemon"
      :src="imgSrc"
      alt="pokemon"
      class="fade-in"
    >
  </div>
</template>

<script>
    export default {
        props:{
         pokemonid:{
             type: Number,
             required: true
         },
         showpokemon:{
             type: Boolean,
             required:true,
             default:false
         }
        },
        computed:{
            imgSrc(){
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonid}.svg`
            }
        }
    }
</script>

<style scoped>

.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
}
img {
    height: 200px;
    position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}



</style>