import React, { useEffect } from "react";
import PokeCard from "../pokeCard/PokeCard";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { fetchAllPokemon } from "../../../redux/slices/pokemonSlice";
import { IPokemon } from "../../../interfaces/interfaces";
import "./pokeList.css";

const PokemonList = () => {
  const { pokemon } = useAppSelector((state: RootState) => state.pokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getPokemon = async () => {
      await dispatch(fetchAllPokemon());
    };
    getPokemon();
  }, [dispatch]);
  return (
    <>
      <div className="pokemonList background">
        {pokemon &&
          pokemon.map((item: IPokemon, index: number) => (
            <PokeCard key={index} item={item} />
          ))}
      </div>
      <h3 onClick={() => (document.documentElement.scrollTop = 0)}>
        Back to top
      </h3>
    </>
  );
};

export default PokemonList;
