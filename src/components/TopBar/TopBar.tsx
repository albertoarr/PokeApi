import React, { useState } from 'react';
import './SideBar.scss'; // Importamos los estilos SCSS

const SideBar = () => {
  // Estado para manejar el valor numérico según la generación seleccionada
  const [generationValue, setGenerationValue] = useState<number>(0);

  // Función que cambia el valor cuando se selecciona una generación
  const handleGenerationSelect = (gen: number) => {
    switch (gen) {
      case 1:
        setGenerationValue(151); // Pokémon de la Generación 1
        break;
      case 2:
        setGenerationValue(251); // Pokémon de la Generación 2
        break;
      case 3:
        setGenerationValue(386); // Pokémon de la Generación 3
        break;
      case 4:
        setGenerationValue(493); // Pokémon de la Generación 4
        break;
      case 5:
        setGenerationValue(649); // Pokémon de la Generación 5
        break;
      case 6:
        setGenerationValue(721); // Pokémon de la Generación 6
        break;
      case 7:
        setGenerationValue(809); // Pokémon de la Generación 7
        break;
      case 8:
        setGenerationValue(898); // Pokémon de la Generación 8
        break;
      case 9:
        setGenerationValue(999); // Pokémon de la Generación 9 (ejemplo)
        break;
      default:
        setGenerationValue(0); // Si no selecciona ninguna generación, el valor es 0
    }
  };

  return (
    <div className="SideBar">
      <h2>Selecciona una Generación</h2>
      <ul>
        <li>
          <button onClick={() => handleGenerationSelect(1)}>Generación 1</button>
        </li>
        <li>
          <button onClick={() => handleGenerationSelect(2)}>Generación 2</button>
        </li>
        <li>
          <button onClick={() => handleGenerationSelect(3)}>Generación 3</button>
        </li>
        <li>
          <button onClick={() => handleGenerationSelect(4)}>Generación 4</button>
        </li>
        <li>
          <button onClick={() => handleGenerationSelect(5)}>Generación 5</button>
        </li>
        <li>
          <button onClick={() => handleGenerationSelect(6)}>Generación 6</button>
        </li>
        <li>
          <button onClick={() => handleGenerationSelect(7)}>Generación 7</button>
        </li>
        <li>
          <button onClick={() => handleGenerationSelect(8)}>Generación 8</button>
        </li>
        <li>
          <button onClick={() => handleGenerationSelect(9)}>Generación 9</button>
        </li>
      </ul>

      <div className="value-display">
        <h3>Valor Seleccionado: {generationValue}</h3>
      </div>
    </div>
  );
};

export default SideBar;
