import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarApp from "./components/Navbarapp";
import { Home } from "./components/Home";
import Pokemones from "./components/Pokemones";
import PokemonResult from "./components/PokemonResult";

function App() {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:pokemonName" element={<PokemonResult />} />
      </Routes>
    </>
  );
}

export default App;
