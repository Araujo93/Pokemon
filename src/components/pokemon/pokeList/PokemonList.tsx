import React, { useEffect } from "react";
import PokeCard from "../pokeCard/PokeCard";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { fetchAllPokemon } from "../../../redux/slices/pokemonSlice";
import { IPokemon } from "../../../interfaces/interfaces";

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
    <div className="pokemonList background">
      {pokemon &&
        pokemon.map((item: IPokemon, index: number) => (
          <PokeCard key={index} item={item} />
        ))}
    </div>
  );
};

export default PokemonList;
