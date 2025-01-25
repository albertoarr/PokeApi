/**
 * Un context en react se utiliza para compartir datos globales sin pasar props
 */

import axios from "axios";

import { createContext, useState, useEffect } from "react";
import { AllPokemonResult, PokeType, PokemonByTypeResult } from "../interfaces/types";

interface ContextProps {
  types: PokeType[]; // lista de tipos
  filterSelected: PokeType; // filtro de pokemon seleccionado para filtrar
  pokemonFiltered: string[] | null; // lista de pokemon ya filtrados
  changeTypeSelected: (type: PokeType) => void; //
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
  /*
   * limit=1025 se asegura de recoger pokemon de la Api (todos hasta ahora)
   * offset funciona para hacer paginación offset=0 significa que empiezas desde el primer pokemon
   */
  let allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=1025#offset=0";

  // State para filtrar tipo como "All" (aparecen todos los pokemon)
  const defaultState: PokeType = {
    name: "All",
    url: allPokemonUrl,
  };

  // Lista de todos los pokemons
  const [allPokemon, setAllPokemon] = useState(null);
  // Lista de pokemons en filtro
  const [pokemonFiltered, setPokemonFiltered] = useState(null);

  // Lista de todos los tipos
  const [types, setTypes] = useState([defaultState]);
  // Lista de filtro seleccionado (default para todos)
  const [filterSelected, setFilterSelected] = useState(defaultState);

  // ---
  const changeTypeSelected = async (type: PokeType) => {
    setFilterSelected(type);

    const { data } = await axios.get(type?.url!);
    let pokemons = data?.pokemon?.map(
      ({ pokemon }: PokemonByTypeResult) => pokemon?.url
    );
    
    // Si tipo es all los pokemon mostrados son todos, si es de otro tipo se filtran
    type.name == "All" ? setPokemonFiltered(allPokemon) : setPokemonFiltered(pokemons);
  };

  // Función flecha que recupera todos los pokemon y los guarda en las listas de pokemon
  const getallPokemon = async () => {
    const { data } = await axios.get(allPokemonUrl); // Petición Api

    console.log(data);

    let pokemons = data?.results?.map(
      // Se recorre las consultas
      (pokemon: AllPokemonResult) => pokemon?.url // Se recupera el url
    );

    // Ambos states con mismo valor
    setAllPokemon(pokemons);
    setPokemonFiltered(pokemons);
  };

  // Recuperar tipos de los pokemon
  const getPokemonsType = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type"); // Petición Api
    setTypes([...types, ...data.results]); // Lista de tipos obtenida
  };

  useEffect(() => {
    // Cuando se ejecuta por primera vez se pide al Api
    getPokemonsType();
    getallPokemon();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        types,
        filterSelected,
        pokemonFiltered,
        changeTypeSelected,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
