import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import { PokeType } from "../../interfaces/types";
import { background } from "../../utils/BackgroundByType";

import styles from "./styles.module.scss";

export const Filters = () => {
  // Define si se abre el selector o no
  const [open, setOpen] = useState(false); 
  // Para volver a la página 1 al cambiar tipos
  const navigate = useNavigate(); 
  // Recuperar el contexto 
  const { types, filterSelected, changeTypeSelected } =useContext(PokemonContext); 
  // Usar la paginación
  const { changePage } = usePagination();

  // Al cambiar de tipo se reinicia la paginación
  const onChangeType = (type: PokeType) => {
    changePage(1);
    navigate("/?page=1");
    changeTypeSelected(type);
  };

  return (
    <div className={styles.ordersContainer} onClick={() => setOpen(!open)}> {/* Cambia el State popoup*/}
      <div className={styles.container}>
        <div className={open ? styles.orderClose : styles.orderOpen}>{/* Si es open se intenta abrir popup */}
          <span>{filterSelected?.name}</span>
        </div>
{/* Si open es true y types existe se abre el popup*/}
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
