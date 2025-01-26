import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

const PokemonSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Hook para navegar a la búsqueda

  // Esta función flecha utiliza el hook useNavigate para ir a la ruta especificada
  const handleSearch = () => {  
    navigate(`/${searchTerm.toLowerCase()}`); 
  };

  const handleKeyPress = (event: React.KeyboardEvent) => { // Acción que lanza la función
    if (event.key === "Enter") {
      handleSearch(); 
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress} 
      />
    </div>
  );
};

export default PokemonSearch;
