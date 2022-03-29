import React, { useEffect, useState } from 'react';
import {fetchMove, fetchPokemon} from './utils';
import {MoveInfo, Pokemon} from './types';
import './app.css';
import Card from "./components/Card";

const App = () => {
  const [currentPokNr, setCurrentPokNr] = useState(2)
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [move1, setMove1] = useState<MoveInfo>();
  const [move2, setMove2] = useState<MoveInfo>();

  useEffect(() => {
    fetchPokemon(`${currentPokNr}`).then((res) => setPokemon(res));
  }, [currentPokNr]);

  // Fetch moves for chosen pokemon
  useEffect(() => {
    if(pokemon){
      let move1URL: string = pokemon?.moves[0].move.url
      fetchMove(move1URL).then((res) => setMove1(res));

      let move2URL: string = pokemon?.moves[1].move.url
      fetchMove(move2URL).then((res) => setMove2(res));
    }
  }, [pokemon]);



  return (
    <div className='appRoot'>
      <Card pokemon={pokemon} move1={move1} move2={move2}/>
      <button onClick={() => setCurrentPokNr(Math.floor(Math.random() * 151))}>Change pokemon</button>
    </div>
  );
};

export default App;
