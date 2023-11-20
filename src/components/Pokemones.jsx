import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const Pokemones = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1021"
        );
        setPokemonList(response.data.results);
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    };

    fetchPokemonList();
  }, []);

  const handlePokemonSelect = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleButtonClick = () => {
    navigate(`/pokemones/${selectedPokemon}`);
  };

  return (
    <Container className="ContainerBox d-grid justify-content-center">
      <h1>Selecciona un Pokémon</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Control as="select" onChange={handlePokemonSelect}>
            <option value="" disabled>
              -- Selecciona un Pokémon --
            </option>
            {pokemonList.map((pokemon) => (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <div className="mt-3">
          <Button variant="primary" onClick={handleButtonClick}>
            Ver Detalle
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Pokemones;
