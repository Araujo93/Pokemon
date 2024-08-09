"use client";

import React, { useState } from "react";

// components
import PokeCard from "src/components/pokemon/pokeCard/PokeCard";
import { IPokemon } from "../../interfaces/interfaces";

// styles
import "./pokemonList.css";

const PokemonList = (props: { item: IPokemon[] }) => {
  return (
    <div className="pokemonList">
      {props.item &&
        props.item.map((item: IPokemon, index) => (
          <PokeCard key={index} item={item} />
        ))}
      <h3
        className="scroll-back-btn"
        onClick={() => (document.documentElement.scrollTop = 0)}
        style={{ zIndex: 999 }}
      >
        Back to top
      </h3>
    </div>
  );
};

export default PokemonList;
