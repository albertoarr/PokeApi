import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import { PokeType } from "../../interfaces/types";
import { background } from "../../utils/BackgroundByType";

import styles from "./styles.module.scss";

export const Filters = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { types, filterSelected, changeTypeSelected } = useContext(PokemonContext);
  const { changePage } = usePagination();

  const onChangeType = (type: PokeType) => {
    changePage(1);
    navigate("/?page=1");
    changeTypeSelected(type);
  };

  return (
    <div className={styles.ordersContainer} onClick={() => setOpen(!open)}>
      <div className={styles.container}>
        <div className={open ? styles.orderClose : styles.orderOpen}>
          <span>{filterSelected?.name}</span>
        </div>

        {open && types && (
          <div className={styles.orders}>
            {types.map((type: PokeType) => (
              <div
                key={type.name}
                className={styles.order}
                onClick={() => onChangeType(type)}
                style={{
                  fontWeight: filterSelected.name === type.name ? "bold" : "",
                }}
              >
                <div
                  className={styles.color}
                  /* @ts-ignore */
                  style={{ background: background[type.name] }}
                />
                {type.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
