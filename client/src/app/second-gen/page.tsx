"use client";

import React from "react";

// components
import PokemonList from "src/components/PokemonList";

import useGetPokemon from "src/hooks/useGetPokemon";

const SecondGenPokemon = () => {
  const { secondGen } = useGetPokemon();

  return <PokemonList item={secondGen} />;
};

export default SecondGenPokemon;
