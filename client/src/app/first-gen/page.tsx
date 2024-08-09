"use client";

import React from "react";

// components
import PokemonList from "src/components/PokemonList";

import useGetPokemon from "src/hooks/useGetPokemon";

// styles
import "./styles.css";

const FirstGenPokemon = () => {
  const { pokemon } = useGetPokemon();

  return <PokemonList item={pokemon} />;
};

export default FirstGenPokemon;
