import React, { useState, useEffect } from "react";
import PokeCard from "./pokeCard/PokeCard";
import { IPokemon } from "../../interfaces/interfaces";

const SecondGenPokemon = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100"
      );
      const data = await res.json();
      setPokemon(data.results);
    };
    getPokemon();
  }, []);

  return (
    <div className="pokemonList">
      {pokemon &&
        pokemon.map((item: IPokemon, index) => (
          <PokeCard key={index} item={item} />
        ))}
    </div>
  );
};

export default SecondGenPokemon;
