import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonResult = () => {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setPokemonData([response.data]);
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 w-25 d-flex justify-content-center border border-dark rounded border-2">
        {pokemonData.map((item) => (
          <div
            className="d-grid justify-content-center"
            key={item.id}
            style={{ width: "18rem" }}
          >
            <img src={item.sprites.front_default} alt={item.name} />
            <h3>
              <b>{item.name}</b>
            </h3>
            <ul>
              <li>
                <span className="hp">HP:{item.stats[0].base_stat}</span>
              </li>
              <li>
                <span className="attack">Attack:{item.stats[1].base_stat}</span>
              </li>
              <li>
                <span className="defense">
                  Defense:{item.stats[2].base_stat}
                </span>
              </li>
              <li>
                <span className="special-attack">
                  Special Attack:{item.stats[3].base_stat}
                </span>
              </li>
              <li>
                <span className="special-defense">
                  Special Defense:{item.stats[4].base_stat}
                </span>
              </li>
              <li>
                <span className="speed">Speed:{item.stats[5].base_stat}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonResult;
