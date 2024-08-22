import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  fetchFirstGenPokemon,
  fetchSecondGenPokemon,
  fetchThirdGenPokemon,
} from "src/redux/slices/pokemonSlice";
import { RootState } from "src/redux/store";

export default function useGetPokemon() {
  const dispatch = useAppDispatch();
  const { pokemon, loading, secondGen, thirdGen } = useAppSelector(
    (state: RootState) => state.pokemon
  );

  useEffect(() => {
    const getFirstGenPokemon = async () => {
      await dispatch(fetchFirstGenPokemon());
    };
    const getSecondGenPokemon = async () => {
      await dispatch(fetchSecondGenPokemon());
    };
    const getThirdGenPokemon = async () => {
      await dispatch(fetchThirdGenPokemon());
    };
    getFirstGenPokemon();
    getThirdGenPokemon();
    getSecondGenPokemon();
  }, [dispatch]);

  return { pokemon, secondGen, thirdGen, loading };
}
