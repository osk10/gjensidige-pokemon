import {MoveInfo, Pokemon} from './types';

export const fetchPokemon = async (pokemonName: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then<Pokemon>(
    (res) => {
      const expectedResponseCode = 200;
      if (res.status === expectedResponseCode) {
        return res.json();
      }
      throw new Error(
        `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
      );
    }
  );

export const fetchMove = async (url: string) =>
    fetch(`${url}`).then<MoveInfo>(
        (res) => {
            const expectedResponseCode = 200;
            if (res.status === expectedResponseCode) {
                return res.json();
            }
            throw new Error(
                `Got HTTP status code ${res.status}, when HTTP status code ${expectedResponseCode} was expected`
            );
        }
    );
