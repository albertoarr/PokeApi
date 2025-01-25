import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../../../assets/arrows";
import { PokeballIconBig } from "../../../../assets/pokeball";
import { IPokemon } from "../../../../interfaces/interface";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  // Este componente contiene un botón para hacer popStackBack, el nombre e Id del Pokemon
  return (
    <header>
      <PokeballIconBig className={styles.pokeball} />
      <div className={styles.left}>
        <ArrowLeftIcon onClick={() => navigate(-1)} />

        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
};
