import { useContext, useState } from "react";

import styles from "./styles.module.scss";
import { PokeballIconSmall } from "../../assets/pokeball";

import { PokemonList } from "../../components/PokemonList/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import { Pagination } from "../../components/Pagination/Pagination";
import { usePagination } from "../../hooks/usePagination";

export const Home = () => {
  // Context que devuelve al pokemon con su información
  const { pokemonFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  // Cuantos pokemon se muestran por página
  const [perPage, setPerPage] = useState(15); 

  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          {/* icono svg */}
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonList
        page={page}
        perPage={perPage}
        pokemonsUrls={pokemonFiltered}
      />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        // "!" asegura que el valor no va a ser null
        maxItems={pokemonFiltered?.length!} 
      />
    </div>
  );
};
