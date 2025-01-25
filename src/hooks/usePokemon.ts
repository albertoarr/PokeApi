import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/interface";

// Este custom Hook pide información sobre un pokemon
export const usePokemon = (url?: string, id?: string) => {
  // IPokemon es una interfaz con los datos del pokemon (generado por json2ts)
  const [pokemon, setPokemon] = useState<IPokemon | null | undefined>();

  // Función flecha asíncrona que pide al Api los datos del pokemon
  const fetchPokemon = async () => {
    if (url) { {/* Si le pasas una URL*/}
      const { data }: any = await axios.get(url);
      setPokemon(data);
    } else if (id) { {/* Si se le pasa un Id de pokemon*/}
      const { data }: any = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon };
};
