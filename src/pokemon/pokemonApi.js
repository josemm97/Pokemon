import axios from 'axios';

const pokemonInstance =  axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
})
export default pokemonInstance;