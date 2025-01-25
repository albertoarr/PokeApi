import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";

import styles from "./styles.module.scss";


export const Home = () => {
  // Context que devuelve al pokemon con su información
  const { pokemonFiltered } = useContext(PokemonContext) 




  return (
    <div className={styles.home}>
      <header>
        <div>
          {/* icono svg */}
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonList pokemonsUrls={pokemonFiltered} />
    </div>
  );
};
