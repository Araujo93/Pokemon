import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  fetchPokemonDesc,
  fetchPokemonEvolutions,
  fetchPokemonInfo,
  fetchPokemonAbilities,
} from "src/redux/slices/pokemonSlice";
import { RootState } from "src/redux/store";

import { getEvoltionChain } from "src/helperFunctions/pokemonInfo";

export const useGetEvolutions = ({ id }: any) => {
  const dispatch = useAppDispatch();

  console.log(id, "ID IN GET EVOLS");
  const { pokemonEvo, pokemonDesc, pokemonInfo, pokemonAbililties } =
    useAppSelector((state: RootState) => state.pokemon);

  const catchSinglePokemon = async (id: number) => {
    await dispatch(fetchPokemonInfo(id));
  };

  // Pokemon fetch for info and description
  useEffect(() => {
    const getPokemonDesc = async (id: string) => {
      await dispatch(fetchPokemonDesc(id));
    };
    const getPokemonEvo = async (id: string) => {
      await dispatch(fetchPokemonEvolutions(id));
    };

    catchSinglePokemon(+id);

    getPokemonDesc(id);
    getPokemonEvo(id);
  }, [id, dispatch]);

  useEffect(() => {
    if (!pokemonInfo || pokemonEvo) return;
    console.log(pokemonInfo, "PKE INFO");
    const getPokemonAbility = async (url: string) => {
      await dispatch(fetchPokemonAbilities(url));
    };

    getPokemonAbility(pokemonInfo.abilities[0].ability.url);
  }, [pokemonInfo]);

  return { pokemonEvo, pokemonDesc, pokemonInfo, pokemonAbililties };
};
