import styles from "./styles.module.scss";

interface Props {
  perPage: number; // Cuántos pokemon aparecen en la página
  page: number; // Número de página
  nextPage: () => void; // Método siguiente
  previousPage: () => void; // Método anterior
  maxItems: number; // Items totales (para saber cuándo no mostrar botón)
}

export const Pagination = ({
  perPage,
  page,
  nextPage,
  previousPage,
  maxItems,
}: Props) => {
  const lastPage = Math.ceil(maxItems / perPage); // Cálculo de última página

  return (
    <div className={styles.pagination}>
      {/* Se desactiva botón en primera página*/}
      <button disabled={page === 1} onClick={previousPage}>
        &lt;
      </button>

      <span>{page}</span>

      {/* Se desactiva botón en última página*/}
      <button disabled={page === lastPage} onClick={nextPage}>
        &gt;
      </button>
    </div>
  );
};
