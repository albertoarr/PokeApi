import axios from "axios";
import { createContext, useState, useEffect, ReactNode } from "react";
import { AllPokemonResult, PokeType, PokemonByTypeResult } from "../interfaces/types";

// Interfaz del contexto
interface ContextProps {
  types: PokeType[]; // lista de tipos
  filterSelected: PokeType; // filtro de pokemon seleccionado para filtrar
  pokemonFiltered: string[] | null; // lista de pokemon ya filtrados
  changeTypeSelected: (type: PokeType) => void; // función para cambiar el tipo seleccionado
}

// Crear el contexto
export const PokemonContext = createContext<ContextProps>({} as ContextProps);

// Interfaz para las props del proveedor
interface ProviderProps {
  children: ReactNode; // Elementos hijos que usan el contexto
  allPokemonUrl?: string; // URL para obtener la lista de todos los Pokémon (opcional)
}

// Componente proveedor del contexto
const PokemonProvider = ({
  children,
  allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0", // Valor por defecto  (hay 1025 pokemon normales en la Api)
}: ProviderProps) => {
  /*
   * El valor por defecto de la URL de los Pokémon es el siguiente,
   * pero puede ser sobreescrito desde el componente que use el Provider.
   */
  const defaultState: PokeType = {
    name: "All",
    url: allPokemonUrl, // URL de la API para obtener todos los Pokémon
  };

  // Estado para almacenar la lista completa de Pokémon
  const [allPokemon, setAllPokemon] = useState<string[] | null>(null);
  // Estado para almacenar la lista filtrada de Pokémon
  const [pokemonFiltered, setPokemonFiltered] = useState<string[] | null>(null);
  // Estado para almacenar los tipos de Pokémon (filtro)
  const [types, setTypes] = useState<PokeType[]>([defaultState]);
  // Estado para almacenar el tipo seleccionado (por defecto "All")
  const [filterSelected, setFilterSelected] = useState<PokeType>(defaultState);

  // Función para cambiar el tipo de Pokémon seleccionado
  const changeTypeSelected = async (type: PokeType) => {
    setFilterSelected(type);

    const { data } = await axios.get(type?.url!); // Realiza la solicitud a la API
    const pokemons = data?.pokemon?.map(
      ({ pokemon }: PokemonByTypeResult) => pokemon?.url // Extrae las URLs de los Pokémon filtrados por tipo
    );

    // Si el tipo es "All", se muestran todos los Pokémon
    type.name === "All"
      ? setPokemonFiltered(allPokemon)
      : setPokemonFiltered(pokemons); // Si no, se muestran solo los filtrados
  };

  // Función para obtener todos los Pokémon desde la URL proporcionada
  const getallPokemon = async () => {
    const { data } = await axios.get(allPokemonUrl); // Realiza la solicitud a la API

    const pokemons = data?.results?.map(
      (pokemon: AllPokemonResult) => pokemon?.url // Extrae las URLs de los Pokémon
    );

    // Establece los estados con la lista de Pokémon obtenidos
    setAllPokemon(pokemons);
    setPokemonFiltered(pokemons); // Inicialmente muestra todos los Pokémon
  };

  // Función para obtener los tipos de Pokémon desde la API
  const getPokemonsType = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type"); // Realiza la solicitud a la API de tipos
    setTypes([...types, ...data.results]); // Establece los tipos de Pokémon en el estado
  };

  // Efecto que se ejecuta al cargar el componente por primera vez
  useEffect(() => {
    getPokemonsType(); // Obtiene los tipos de Pokémon
    getallPokemon(); // Obtiene todos los Pokémon
  }, [allPokemonUrl]); // Re-ejecuta si cambia la URL de los Pokémon

  return (
    <PokemonContext.Provider
      value={{
        types, // Tipos de Pokémon
        filterSelected, // Tipo de Pokémon seleccionado
        pokemonFiltered, // Pokémon filtrados
        changeTypeSelected, // Función para cambiar el tipo seleccionado
      }}
    >
      {children} {/* Renderiza los hijos que tienen acceso a este contexto */}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
