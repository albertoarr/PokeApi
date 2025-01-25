import { IPokemon } from "../../interfaces/interface";
import { background } from "../../utils/BackgroundByType";
import { Loader } from "../Loader/Loader";
import { BaseStats } from "./components/BaseStats";
import { Header } from "./components/Header";
import { PokeTypes } from "./components/PokeTypes";
import { Stats } from "./components/Stats";
import { Title } from "./components/Title";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  // Ts Ignore porque al poder ser undefined el IDE notifica de posible error
  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  // Si no hay datos se usa de nuevo el Loader
  if (!pokemon) {
    return (
      <div
        style={{ background: backgroundSelected }}
        className={styles.loadingContainer}
      >
        <Loader size={50} color="fff" />
      </div>
    );
  }

  // Se forma el componente con los subcomponentes
  return (
    <div style={{ background: backgroundSelected }} className={styles.bg}>
      <Header pokemon={pokemon} />
      <div className={styles.info}>
        {/* Se muestra dreamWorld img o el sprite orginal depende de disponibilidad */}
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
        <PokeTypes pokemon={pokemon} />
        <Title content="About" backgroundSelected={backgroundSelected} />
        <Stats pokemon={pokemon} />
        <Title content="Base Stats" backgroundSelected={backgroundSelected} />
        <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />
      </div>
    </div>
  );
};
