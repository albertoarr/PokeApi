import { PokemonCard } from "../PokemonCard/PokemonCard";

import styles from "./styles.module.scss";

interface Props {
  pokemonsUrls?: string[] | null; // URLs
  page?: number; // Paginado (no sobrecargar la página)
  perPage?: number; // Pokemons por página mostrados
}

/* 
  Este componente mapea a partir de los pokemon obtenidos, una lista 
  reducida por paginación.

  .slice(start, end) es la encargada de cortar la lista:
    - start = (página - 1) * pokemons
    - end = (página -1 ) * pokemons + pokemons

  .map los mapea y se encarga de dar los datos a PokemonCard para
  que se dibujen los pokemon por el URL
*/
export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
  return (
    <div className={styles.pokemons}>
      {pokemonsUrls
        ?.slice((page! - 1) * perPage!, (page! - 1) * perPage! + perPage!) // Uso ! porque en ningún caso de uso "perPage" será null o undefined
        .map((pokemonUrl) => (
          <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
    </div>
  );
};
