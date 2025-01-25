import { HeightIcon, WeightIcon } from "../../../../assets/stats";
import { IPokemon } from "../../../../interfaces/interface";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  // Este componente dibuja los iconos del peso y tamaño del pokemon
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <WeightIcon />
        <span>{pokemon?.weight! / 10} Kg</span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <HeightIcon />
        <span>{pokemon?.height! / 10} m</span>
        <p>Height</p>
      </div>
    </div>
  );
};
