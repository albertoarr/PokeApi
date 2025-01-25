import { PokemonCard } from "../PokemonCard/PokemonCard";

import styles from "./styles.module.scss";

interface Props {
  pokemonsUrls?: string[] | null; // URLs
  page?: number; // Paginado (no sobrecargar la página)
  perPage?: number; // Pokemons por página mostrados
}

/* 
Este componente mapea a partir de los pokemon obtenidos, 
    una lista reducida por paginación 
*/
export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
  return (
    <div className={styles.pokemons}>
        {pokemonsUrls?.map((pokemonsUrl) => (
            <PokemonCard key={pokemonsUrl} url={pokemonsUrl} />
        ))}
    </div>
  );
};
