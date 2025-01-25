import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePagination = () => {
  // Hook para trabajar con parámetros de pagination (page=1)
  const [searchParams] = useSearchParams();
  // Hook para navegar entre rutas
  const navigate = useNavigate();

  // State para las número de páginas
  const [page, changePage] = useState(1);

  console.log(searchParams)

  // Recoge la página actual y cambia a la siguiente
  const nextPage = () => {
    changePage(page + 1);
    navigate(`/?page=${page + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Recoge la página actual y cambia a la anterior
  const previousPage = () => {
    changePage(page - 1);
    navigate(`/?page=${page - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Volver al principio (page=1)
  const backToHome = () => {
    changePage(1);
    navigate("/");
  };

  /*
    Este useEffect se activa cuando cambia "searchParams"
    - Si esto ocurre, useEffect leerá la URL y filtrará
    los pokemon correspondientes a dicha página.
    - Se hace de esta manera por si se intenta acceder a la ruta
    directamente sin pasar por (page=1) 
  */
  useEffect(() => {
    // Si no hay parámetro en el "page" de la URL -> page=1
    changePage(parseInt(searchParams.get("page")!) || 1);
  }, [searchParams]);

  return { page, nextPage, previousPage, changePage, backToHome };
};
