import { Link } from "react-router-dom"; // Enlaza la página actual a otra con datos del pokemon

import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/BackgroundByType";

import { Loader } from "../Loader/Loader";

import styles from "./styles.module.scss";

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url); // pokemon son los datos del hook usePokemon(url)

  // See selecciona el primer tipo del pokemon para elegir un color de fondo de tarjeta
  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];
  
  return (
    <Link to={`/${pokemon?.id}`} className={styles.pokeCard}> {/* Enlace al detalle */}

      <div style={{ borderColor: backgroundSelected }} className={styles.top}>
        
        <span style={{ color: backgroundSelected }}>#{pokemon?.id}</span> {/* Id del pokemon*/}
        
        {/* 
            Si una de los sprites (dreamworld o estándar) se muestra.
            Si no existe se muestra una pantalla de cargando (componente Loading)
         */}
        {pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.front_default 
        ? (
          <img
            src={
              pokemon?.sprites?.other?.dream_world?.front_default ||
              pokemon?.sprites?.front_default
            }
            alt={pokemon?.name}
          />
        ) : (
          <div className={styles.loadingContainer}>
            <Loader color={backgroundSelected} />
          </div>
        )}
      </div>
      <div style={{ background: backgroundSelected }} className={styles.bottom}>
        {pokemon?.name}
      </div>
    </Link>
  );
};
