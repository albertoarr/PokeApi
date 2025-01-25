import { useParams } from "react-router-dom";
import { PokemonDetail } from "../../components/PokemonDetail";
import { usePokemon } from "../../hooks/usePokemon";

export const PokeDetail = () => {
  // Se lee de la URL el ID
  const { pokeId } = useParams();

  // Se obtiene el pokemon a partir de la Id leída por useParams
  const { pokemon } = usePokemon("", pokeId);

  // Se renderiza el pokemon obtenido con PokemonDetail 
  return <PokemonDetail pokemon={pokemon!} />; 
};
