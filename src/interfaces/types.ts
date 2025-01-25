import { PokeTypes } from "../utils/BackgroundByType";

export type PokeType = {
  name: PokeTypes | "All";
  url?: string;
};

export type AllPokemonResult = {
  name: string;
  url: string;
};

export type PokemonByTypeResult = {
  pokemon: {
    name: string;
    url: string;
  };
};
