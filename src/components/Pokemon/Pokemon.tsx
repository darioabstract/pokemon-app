import React from 'react';
import { IPokemon } from '../../types/dataTypes';
import { Card } from 'antd';
import "./Pokemon.css";

const { Meta } = Card;

interface PokemonProps {
    pokemonDetails: IPokemon[];
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemonDetails }) => {
    console.log(pokemonDetails)
    return (
        <div>
            <h2 className='title_list'>Pokemon List</h2>
            <div className='list_container'>
                {pokemonDetails.map((pokemon, index) => (
                    <ul key={index}>
                        <li>
                            <Card
    style={{ width: 190 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={pokemon.image}
      />
    }

  >
    <Meta
      title={pokemon.name.toUpperCase()}
    />
  </Card>
                        </li>
                    </ul>

                ))}
            </div>
        </div>
    );
};
