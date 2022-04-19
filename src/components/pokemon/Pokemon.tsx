import React from "react";
import PokeCard from "./pokeCard/PokeCard";
import { IPokemon } from "../../interfaces/interfaces";
import {
  fetchSecondGenPokemon,
  fetchThirdGenPokemon,
} from "../../redux/slices/pokemonSlice";
import "./pokeList/pokeList.css";

const Pokemon = (props: { item: IPokemon[] }) => {
  return (
    <>
      <div className="pokemonList">
        {props.item &&
          props.item.map((item: IPokemon, index) => (
            <PokeCard key={index} item={item} />
          ))}
      </div>
      <h3 onClick={() => (document.documentElement.scrollTop = 0)}>
        Back to top
      </h3>
    </>
  );
};

export default Pokemon;
