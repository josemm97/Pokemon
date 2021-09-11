
import pokemonInstance from '../pokemon/pokemonApi';
import axios from 'axios';
const getPokemons = () => 
{
    // cramos una arreglo de 650 elementos
    let pokemons = Array.from(Array(650))

   return pokemons.map((p, index)=> index + 1)
}
  

;
export const getPokemonOptions =async  () => {
  const mixed = getPokemons().sort(()=>Math.random() - 0.5)
 try {
    const pokemons = await getPokemonNames(mixed.splice(0,4))
    return pokemons;
} catch (error) {
     console.log(error)
 }
};

const getPokemonNames = async ([a,b,c,d] = []) => {
    // const { data }  = await pokemonInstance.get("/1")
    // console.log(data.name)
    const promArray = [
        pokemonInstance.get(`/${a}`),
        pokemonInstance.get(`/${b}`),
        pokemonInstance.get(`/${c}`),
        pokemonInstance.get(`/${d}`)
    ]
        
    const [res1, res2, res3, res4] =  await axios.all(promArray)
    //  Promise.all(promArray);
    return[
        {name:res1.data.name, id: res1.data.id},
        {name:res2.data.name, id: res2.data.id},
        {name:res3.data.name, id: res3.data.id},
        {name:res4.data.name, id: res4.data.id}
    ]
    
}


