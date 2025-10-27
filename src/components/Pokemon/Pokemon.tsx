import React from 'react';
import { Card, Spin, Alert } from 'antd';
import { usePokemonStore } from '../../store/pokemonStore';
import "./Pokemon.css";

const { Meta } = Card;

export const Pokemon: React.FC = () => {
  const { pokemonDetails, loading, error } = usePokemonStore();

  if (loading) return <Spin tip="Loading Pokémon..." />;
  if (error) return <Alert type="error" message={error} />;

  return (
    <div>
      <h2 className='title_list'>Pokemon List</h2>
      <ul className='list_container'>
        {pokemonDetails.map((pokemon) => (
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
              <div className='height'>Height: {pokemon.height}</div>
              <div className='weight'>Weight: {pokemon.weight}</div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
