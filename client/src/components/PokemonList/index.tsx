"use client";

import React, { useState } from "react";

// components
import PokeCard from "src/components/pokemon/pokeCard/PokeCard";
import { IPokemon } from "../../interfaces/interfaces";

// styles
import "./pokemonList.css";

import Loader from "../loader";

type PokemonListProps = {
  item: IPokemon[];
  loading: boolean;
};

const PokemonList = ({ item, loading }: PokemonListProps) => {
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 200,
          height: "100%",
          width: "100%",
        }}
      >
        <Loader />
      </div>
    );
  }
  return (
    <div className="pokemonList">
      {item &&
        item.map((item: IPokemon, index) => (
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
