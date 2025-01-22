import axios from "axios";

import { createContext, useSstate } from "react";
import { PokeType } from "../interfaces/types";

interface ContextProps {
    types: PokeType[]
    filterSelected: PokeType
    pokemonsFiltered: string[] | null
    changeTypeSelected: (type: PokeType) => void
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvider = ({children}) => {
    let allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000#offset=0"

    const defaultState: PokeType = {
        name: "All",
        url: allPokemonUrl
    }

    const [allPokemons, setAllPokemons] = useState(null)
    const [pokemonSFiltered, setPokemonsFiltered] = useState(null)
    
    const [types, setType] = useState(defaultState)
    const [filterSelected, setFilterSelected] = useState(defaultState)

    const getAllPokemons = async () => {
        const {data} = await axios.get(allPokemonsUrl)
    }
    return (
        <PokemonContext.Provider>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider