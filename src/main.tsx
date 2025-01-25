import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PokeDetail } from "./pages";

import "./index.css";
import PokemonProvider from "./context/PokemonContext";

// Router de react-router-dom (accede a los elementos de la carpeta pages)
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
