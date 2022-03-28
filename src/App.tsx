import React, { useEffect, useState } from 'react';
import {fetchMove, fetchPokemon} from './utils';
import {MoveInfo, Pokemon} from './types';
import './app.css';
import Card from "./components/Card";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [move1, setMove1] = useState<MoveInfo>();
  const [move2, setMove2] = useState<MoveInfo>();

  useEffect(() => {
    fetchPokemon('bulbasaur').then((res) => setPokemon(res));
  }, []);

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
    </div>
  );
};

export default App;
