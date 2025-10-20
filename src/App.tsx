import React, { useEffect, useState } from 'react';
import "./App.css";
import mainCall from './api/mainCall';
import { IGetPokemonData} from './types/dataTypes';


export const App = () => {

const [pokemonList, setPokemonList] = useState<IGetPokemonData[] | []>()

useEffect(() => {
    mainCall.get('pokemon', {})
      .then((res) => setPokemonList(res.data.results))
      .catch((err) => console.error('Failed to fetch Pokémon:', err));
}, []);
  
  console.log(pokemonList)
  
  return (
    <div className="App">
      <div>Pokemon</div>
      {pokemonList && pokemonList.map((item, index) => {
        return (

          <div key={index}>{item && item.name}</div>
       )
     })}
    
    </div>
  );
}

