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
                <div className="headings">
                    <h1 className="cardName">{pokemon.name}</h1>
                    <h1 className="cardHP">{pokemon.stats[0].base_stat} HP</h1>
                </div>
                <div className='cardTop'>
                    <div className='imageContainer'>
                        <img className='pokemonImg'
                             src={pokemon.sprites.other["official-artwork"].front_default}
                             alt={`${pokemon.name} illustration of Pokemon`}
                        />
                    </div>
                    <p>Number: {pokemon.id} - Height: {pokemon.height} - Weight: {pokemon.weight}</p>
                </div>
                <div className='cardMoves'>
                    <h2>Moves:</h2>
                    {move1 &&
                        <>
                            <h3>{move1.name}</h3>
                            <p>{move1.flavor_text_entries[0].flavor_text}</p>
                        </>
                    }
                    {move2 &&
                        <>
                            <h3>{move2.name}</h3>
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
