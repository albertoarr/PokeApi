import { useContext, useState } from "react";

import styles from "./styles.module.scss";
import { PokeballIconSmall } from "../../assets/pokeball";

import { PokemonList } from "../../components/PokemonList/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import { Pagination } from "../../components/Pagination/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { Filters } from "../../components/Filters/Filter";
import PokemonSearch from "../../components/SearchBar/SearchBar";

export const Home = () => {
  // Context que devuelve al pokemon con su información
  const { pokemonFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  // Cantidad de pokemon se muestran por página
  const [perPage, setPerPage] = useState(15);

  const reloadPage = () => {
    backToHome()
    window.location.reload()
  }

  return (
    <div className={styles.home}>
      <header>
        <div onClick={reloadPage}>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonSearch/>
      <Filters />
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
