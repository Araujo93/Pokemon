import React, { useEffect, useState } from "react";
import "./pokeInfo.css";
import { useParams } from "react-router";
import {
  getEvoltionChain,
  getTypes,
  getWeakness,
} from "../../../helperFunctions/pokemonInfo";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import {
  fetchAllPokemonDesc,
  fetchAllPokemonInfo,
  fetchPokemonEvolutions,
} from "../../../redux/slices/pokemonSlice";
import { id } from "../../../interfaces/interfaces";

const PokeInfo = () => {
  const {
    pokemonInfo: pokemon,
    pokemonDesc,
    pokemonEvo,
  } = useAppSelector((state: RootState) => state.pokemon);

  const dispatch = useAppDispatch();
  let { id } = useParams<id>();

  const [evolutions, setEvolutions] = useState<any>([]);

  const [ability, setAbilility] = useState<any>({});

  const catchSinglePokemon = async (id: number) => {
    await dispatch(fetchAllPokemonInfo(id));
  };

  const nextPokemon = async (id: number) => {
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
    const getPokemonEvo = async (id: string) => {
      await dispatch(fetchPokemonEvolutions(id));
    };
    catchSinglePokemon(+id);

    getPokemonDesc(id);
    getPokemonEvo(id);
  }, [id, dispatch]);

  useEffect(() => {
    if (!pokemon || !pokemonEvo) return;

    const pokemonAbility = async () => {
      const result = await fetch(pokemon.abilities[0].ability.url);
      const res = await result.json();
      setAbilility(res);
    };
    const evolutions = getEvoltionChain(pokemonEvo.chain);
    setEvolutions(evolutions);
    pokemonAbility();
  }, [pokemon, pokemonEvo]);

  return (
    <>
      <div className="pokemon-card-container">
        <h1 className="pokemon-header">
          {pokemon.name} <span className="pokemon-id"> #{pokemon.id}</span>
        </h1>
        <div className="pokemon-main">
          <img
            className="pokemon-image"
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            alt=""
          />
          <div className="pokemon-description">
            {pokemonDesc.flavor_text_entries &&
              pokemonDesc.flavor_text_entries[0].flavor_text}{" "}
            <div className="poke-weight">
              <h4 className="stat-header">Height</h4>
              <p> {(pokemon.height * 0.328).toFixed(2)} ft</p>
              <h4 className="stat-header weight-header ">Weight</h4>
              <p> {pokemon.weight * 0.22} lb</p>
              <h4 className="stat-header weight-header ">Abilities</h4>
              <p className="ability-name">{ability.name}</p>
              <p>
                {ability.effect_entries &&
                  ability.effect_entries[1].short_effect}
              </p>
            </div>
          </div>
        </div>

        <div className="pokemon-info">
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

          <div className="pokemon-types-container">
            <h2>Types</h2>
            <div className="pokemon-types ">{getTypes(pokemon)}</div>

            <h2>Weaknesses</h2>
            <div className="pokemon-types ">{getWeakness(pokemon, "weak")}</div>

            <h2>Strength</h2>
            <div className="pokemon-types ">{getWeakness(pokemon, "str")}</div>
          </div>
        </div>

        <div className="pokemon-evo-container">
          <h2 className="evolution-header">Evolutions</h2>
          <div className="tester">
            {evolutions &&
              evolutions.map((el: any) => (
                <div className="pokemon-evo" key={el.name}>
                  <img
                    className="pokemon-evo-image"
                    src={`https://img.pokemondb.net/artwork/large/${el.name}.jpg`}
                    alt=""
                  />
                  <h2>{el.name}</h2>
                </div>
              ))}
          </div>
        </div>
        <div className="div btn-container">
          <button
            className="btn"
            onClick={() => previousPokemon(pokemon.id ? pokemon.id : +id)}
          >
            Previous{" "}
          </button>
          <button
            className="btn"
            onClick={() => nextPokemon(pokemon.id ? pokemon.id : +id)}
          >
            Next{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default PokeInfo;
