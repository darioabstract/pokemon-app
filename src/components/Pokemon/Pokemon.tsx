import React from 'react';
import { Card, Input, Spin, Alert } from 'antd';
import { usePokemonStore } from '../../store/pokemonStore';
import "./Pokemon.css";

const { Meta } = Card;
const { Search } = Input;

export const Pokemon: React.FC = () => {
  const {
    filteredPokemon,
    loading,
    error,
    searchQuery,
    setSearchQuery,
  } = usePokemonStore();

  const pokemons = filteredPokemon();

  if (loading) return <Spin tip="Loading Pokémon..." />;
  if (error) return <Alert type="error" message={error} />;

  return (
    <div>
      <h2 className="title_list">Pokémon List</h2>

      <div className="search_container">
        <Search
          placeholder="Search Pokémon by name"
          allowClear
          enterButton
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ maxWidth: 400, marginBottom: 20 }}
        />
      </div>

      {pokemons.length === 0 ? (
        <div className='not_found'>
          <div>No Pokémon found.</div>
          <img
            src="https://i.pinimg.com/736x/63/67/99/636799a4c9cfce6b58a00231d189e4a6.jpg"
            alt="pikachu_crying"
          />
        </div>
      ) : (
        <ul className="list_container">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <Card
                style={{ width: 180 }}
                cover={
                  <img
                    draggable={false}
                    alt={pokemon.name}
                    src={
                      pokemon.image
                        ? pokemon.image
                        : 'https://formbuilder.ccavenue.com/live/uploads/company_image/488/17316704336156_Event-Image-Not-Found.jpg'
                    }
                  />
                }
              >
                <Meta title={pokemon.name.toUpperCase()} />
                <div className="height">Height: {pokemon.height}</div>
                <div className="weight">Weight: {pokemon.weight}</div>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
