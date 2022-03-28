import React from 'react';
import { Pokemon , MoveInfo} from '../types';

interface Props {
    pokemon?: Pokemon;
    move1?: MoveInfo;
    move2?: MoveInfo;
}

const Card: React.FunctionComponent<Props> = ({ pokemon, move1, move2 }) => {
    if (pokemon) {
        return (
            <div className='cardContainer'>
                <div className='cardTop'>
                    <h1>{pokemon.name}</h1>
                    <h1>{pokemon.stats[0].base_stat} HP</h1>
                    <img
                        src={pokemon.sprites.other["official-artwork"].front_default}
                        alt={`${pokemon.name} illustration of Pokemon`}
                    />
                    <p>NO: {pokemon.id} - HT: {pokemon.height} - WT: {pokemon.weight}</p>
                </div>
                <div className='cardMid'>
                    <h2>Moves</h2>
                    {move1 &&
                        <>
                            <h1>{move1.name}</h1>
                            <p>{move1.flavor_text_entries[0].flavor_text}</p>
                        </>
                    }
                    {move2 &&
                        <>
                            <h1>{move2.name}</h1>
                            <p>{move2.flavor_text_entries[0].flavor_text}</p>
                        </>
                    }
                </div>
            </div>
        );
    }
    return null;
};
export default Card;
