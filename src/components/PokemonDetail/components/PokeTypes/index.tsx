import { IPokemon } from "../../../../interfaces/interface";
import { background } from "../../../../utils/BackgroundByType";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
  // Este componente dibuja el tipo del pokemon con su background
  return (
    <div className={styles.types}>
      {/* @ts-ignore */}
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          /* @ts-ignore */
          style={{ background: background[name] }}
          className={styles.type}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
