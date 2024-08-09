"use client";

import React from "react";

// components
import PokemonList from "src/components/PokemonList";

import useGetPokemon from "src/hooks/useGetPokemon";

const ThirdGenPokemon = () => {
  const { thirdGen } = useGetPokemon();

  return <PokemonList item={thirdGen} />;
};

export default ThirdGenPokemon;
