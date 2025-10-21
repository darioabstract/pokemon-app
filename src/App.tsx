import React, { useEffect, useState } from 'react';
import "./App.css";
import mainCall from './api/mainCall';
import { IGetPokemonData, IPokemon } from './types/dataTypes';
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Pokemon } from './components/Pokemon/Pokemon';

export const App = () => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemon[]>([]);

  useEffect(() => {
  mainCall.get('pokemon?limit=20', {}).then((res) => {
    const results = res.data.results;
    
    const promisesArray = results.map((result: IGetPokemonData) => {
      return mainCall.get(result.url).then((res) => {
        return {
          name: res.data.name,
          image: res.data.sprites.front_shiny, // only pick what you need
        };
      });
    });

    return Promise.all(promisesArray);
  })
  .then((res) => {
    setPokemonDetails(res); // res is now an array of { name, image }
  });
}, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/pokemon" element={<Pokemon pokemonDetails={pokemonDetails} />} />
      </Routes>
    </div>
  );
};
