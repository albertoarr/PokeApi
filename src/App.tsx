import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PokeDetail } from "./pages";
import "./index.css";
import "./App.scss"
import PokemonProvider from "./context/PokemonContext";

// Configuración de limit y offset por generación
const generations = [
  { limit: 151, offset: 0 },   // Generación 1
  { limit: 100, offset: 151 }, // Generación 2
  { limit: 135, offset: 251 }, // Generación 3
  { limit: 107, offset: 386 }, // Generación 4
  { limit: 156, offset: 493 }, // Generación 5
  { limit: 72, offset: 649 },  // Generación 6
  { limit: 88, offset: 721 },  // Generación 7
  { limit: 96, offset: 809 },  // Generación 8
  { limit: 108, offset: 905 }, // Generación 9
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:pokeId",
    element: <PokeDetail />,
  },
]);

function App() {
  const [pokemonUrl, setPokemonUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0"
  );

  // Función para cambiar el URL según la generación seleccionada
  const handleGenerationChange = (generation: number) => {
    const { limit, offset } = generations[generation - 1];
    const newUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    setPokemonUrl(newUrl);
  };

  return (
    <PokemonProvider allPokemonUrl={pokemonUrl}>
      <div className="generation-buttons">
        {/* Botones para cada generación */}
        {[...Array(9)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handleGenerationChange(index + 1)}
          >
            Generación {index + 1}
          </button>
        ))}
      </div>
      <RouterProvider router={router} />
    </PokemonProvider>
  );
}

export default App;
