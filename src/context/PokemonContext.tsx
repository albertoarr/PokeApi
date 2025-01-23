import axios from "axios";

import { createContext, useState, useEffect } from "react";
import { AllPokemonResult, PokeType } from "../interfaces/types";

interface ContextProps {
    types: PokeType[]
    filterSelected: PokeType
    pokemonFiltered: string[] | null
    changeTypeSelected: (type: PokeType) => void
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvider = ({ children }: any) => {
    /*
     * limit=10.000 se asegura de recoger 10.000 pokemon de la Api (para tener muchos datos)
     * offset funciona para hacer paginación offset=0 significa que empiezas desde el primer pokemon
     */
    let allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000#offset=0"

    // State para filtrar tipo como "All" (aparecen todos los pokemon)
    const defaultState: PokeType = {
        name: "All",
        url: allPokemonUrl
    }

    // Lista de todos los pokemons 
    const [allPokemon, setAllPokemon] = useState(null)
    // Lista de pokemons en filtro
    const [pokemonFiltered, setPokemonFiltered] = useState(null)
    
    // Lista de todos los tipos
    const [types, setTypes] = useState([defaultState])
    // Lista de filtro seleccionado (default para todos)
    const [filterSelected, setFilterSelected] = useState(defaultState)
    
    // ---
    const changeTypeSelected = () => {}

    // Función flecha que recupera todos los pokemons del api
    const getallPokemon = async () => {
        const {data} = await axios.get(allPokemonUrl)
    
        console.log(data)

        let pokemons = data?.results?.map(
            (pokemon: AllPokemonResult) => pokemon?.url
        )

        setAllPokemon(pokemons);
        setPokemonFiltered(pokemons);
    }
    
    // Recuperar tipos de los pokemon
    const getPokemonsType = async () => {
        const { data } = await axios.get("https://pokeapi.co/api/v2/type");
        setTypes([...types, ...data.results]);
    };
    
    useEffect(() => {
    getPokemonsType()
        getallPokemon()
    }, [])

    return (
        <PokemonContext.Provider
        value={{
            types,
            filterSelected,
            pokemonFiltered,
            changeTypeSelected,
        }}
         >
            { children }
        </PokemonContext.Provider>
    )

}

export default PokemonProvider