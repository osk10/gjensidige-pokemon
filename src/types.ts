interface NameUrlPair {
  name: string;
  url: string;
}

interface Ability {
  ability: NameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface Item {
  item: NameUrlPair;
}

interface Move {
  move: NameUrlPair;
}

interface SimpleSprite {
  front_default: string;
}

interface Sprites extends SimpleSprite {
  other: OtherSprites;
}

interface OtherSprites {
  dream_world: SimpleSprite;
  'official-artwork': SimpleSprite;
}

interface TypeOfPokemon {
  type: NameUrlPair;
}

interface Stat {
  'base_stat': number
  stat: NameUrlPair;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrlPair[];
  height: number;
  held_items: Item[];
  id: number;
  moves: Move[];
  name: string;
  species: NameUrlPair;
  sprites: Sprites;
  types: TypeOfPokemon[];
  weight: number;
  stats: Stat[]
}

// Interfaces for moves
interface Flavor_text {
  flavor_text: string;
}

export interface MoveInfo {
  name: string;
  flavor_text_entries: Flavor_text[];
}


