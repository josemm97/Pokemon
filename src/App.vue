<template>
  <div v-if="pokemon">
    <Pokemon />
    <pokemon-picture
      :pokemonid="pokemon.id"
      :showpokemon="showPokemon"
    />
    <PokemonOptions 
      :pokemons="pokemonArr"
      @selection="checkAnswer($event)"
    />
    <div v-if="showAnswer">
      <h1>{{ message }}</h1>
      <button @click="newGame">
        Restart
      </button>
    </div>
  </div>
  <div v-else>
    <SpinnerVue />
  </div>
</template>

<script>
import PokemonPicture from './components/PokemonPicture.vue'
import Pokemon from './pages/Pokemon.vue'
import PokemonOptions from './components/PokemonOptios.vue'
import {getPokemonOptions} from './helpers/getPokemonOptions' 
import SpinnerVue from './spinner/Spinner.vue'

export default {
  name: 'App',
  components: {
    Pokemon,
    PokemonPicture,
    PokemonOptions,
    SpinnerVue,
  },
  data(){
    return{
      pokemonArr : [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message:''
    }
  },
  mounted(){
    this.mixPokemonArray()
  },
  methods: {
    async mixPokemonArray(){
      this.pokemonArr =  await getPokemonOptions()

      const rnd = Math.floor(Math.random() * 4)
      // console.log(rnd)
      this.pokemon = this.pokemonArr[rnd];
      console.log(this.pokemon);
    },
    checkAnswer(event){
      console.log(event)
      this.showAnswer = true
      this.showPokemon = true
      this.message = this.pokemon.id === event 
      ? `Pokemon Correcto es ${this.pokemon.name}`
      :`Pokemon incorrecto es ${this.pokemon.name}`
    },
    newGame(){
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon= null
      this.mixPokemonArray()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
background: #2c3e50;
padding: 20px;
border-radius: 20px;
color: #fff;
width: 200px;
font-weight: 700;
font-size:20px ;
}
</style>
