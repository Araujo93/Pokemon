import React, { useEffect, useState } from "react";
import "./pokeInfo.css";
import { useParams } from "react-router";
import { getTypes } from "../../../helperFunctions/pokemonInfo";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import {
  fetchAllPokemonDesc,
  fetchAllPokemonInfo,
} from "../../../redux/slices/pokemonSlice";
import { id } from "../../../interfaces/interfaces";

const PokeInfo = () => {
  const { pokemonInfo: pokemon, pokemonDesc } = useAppSelector(
    (state: RootState) => state.pokemon
  );

  const dispatch = useAppDispatch();
  let { id } = useParams<id>();
  const [selectValue, setSelectValue] = useState(pokemon.name);

  const [ability, setAbilility] = useState<any>({});

  const catchSinglePokemon = async (id: any) => {
    await dispatch(fetchAllPokemonInfo(id));
  };

  const change = async (e: any) => {
    setSelectValue(e.target.value);
    await catchSinglePokemon(e.target.value);
    await dispatch(fetchAllPokemonDesc(e.target.value));
  };

  const nextPokemon = async (id: any) => {
    await catchSinglePokemon(id + 1);
    await dispatch(fetchAllPokemonDesc(id + 1));
  };

  const previousPokemon = async (id: any) => {
    await catchSinglePokemon(id - 1);
    await dispatch(fetchAllPokemonDesc(id - 1));
  };

  // Pokemon fetch for info and description
  useEffect(() => {
    const getPokemonDesc = async (id: string) => {
      await dispatch(fetchAllPokemonDesc(id));
    };

    catchSinglePokemon(id);
    getPokemonDesc(id);
  }, [id, dispatch]);

  useEffect(() => {
    if (!pokemon) return;

    const pokemonAbility = async () => {
      const result = await fetch(pokemon.abilities[0].ability.url);
      const res = await result.json();
      setAbilility(res);
    };
    pokemonAbility();
  }, [pokemon]);

  //   <div className="btn-container">
  //   <button className="btn" onClick={() => previousPokemon(pokemon.id)}>
  //     Previous
  //   </button>
  //   <button className="btn" onClick={() => nextPokemon(pokemon.id)}>
  //     Next
  //   </button>
  // </div>
  return (
    <div className="pokemon-card-container">
      <div className="pokemon-main">
        <img
          className="pokemon-image"
          src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          alt=""
        />
        {pokemon.stats[0].base_stat !== 0 && (
          <div className="statRow">
            <h2>Stats</h2>
            {pokemon.stats.map((stat) => {
              return (
                <div className="test" key={stat.stat.name}>
                  <div className="stats1">{stat.stat.name}</div>
                  <div className="progressBar">
                    <div
                      className="stats"
                      style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                    >
                      {stat.base_stat}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="pokemon-info">
        <div className="pokemon-description">
          {pokemonDesc.flavor_text_entries &&
            pokemonDesc.flavor_text_entries[0].flavor_text}{" "}
        </div>

        <div className="poke-weight">
          <h4 className="stat-header">Height</h4>
          <p> {(pokemon.height * 0.328).toFixed(2)} ft</p>
          <h4 className="stat-header weight-header ">Weight</h4>
          <p> {pokemon.weight * 0.22} lb</p>
          <h4 className="stat-header weight-header ">Abilities</h4>
          <p className="ability-name">{ability.name}</p>
          <p>
            {ability.effect_entries && ability.effect_entries[0].short_effect}
          </p>
        </div>

        <div className="pokemon-types-container">
          <h2>Types</h2>
          <div className="pokemon-types">{getTypes(pokemon)}</div>
        </div>
      </div>
    </div>
  );
};

export default PokeInfo;
