import React, { useEffect } from 'react';
import "./App.css";
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Pokemon } from './components/Pokemon/Pokemon';
import { usePokemonStore } from './store/pokemonStore';

export const App = () => {
  const { fetchPokemon } = usePokemonStore();

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
};
