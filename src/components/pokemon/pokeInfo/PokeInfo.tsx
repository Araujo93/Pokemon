import React, { useEffect, useState } from "react";
import "./pokeInfo.css";
import { useParams } from "react-router";
import { getTypes } from "../../../helperFunctions/pokemonInfo";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import {
  fetchAllPokemon,
  fetchAllPokemonDesc,
  fetchAllPokemonInfo,
  fetchSecondGenPokemon,
  fetchThirdGenPokemon,
} from "../../../redux/slices/pokemonSlice";
import { id } from "../../../interfaces/interfaces";

const PokeInfo = () => {
  const {
    pokemonInfo: pokemon,
    pokemonDesc,
    pokemon: allPokemon,
    secondGen,
    thirdGen,
  } = useAppSelector((state: RootState) => state.pokemon);

  const dispatch = useAppDispatch();
  let { id } = useParams<id>();
  const [selectValue, setSelectValue] = useState(pokemon.name);

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
  // Pokemon fetch for info and description
  useEffect(() => {
    const getPokemonDesc = async (id: string) => {
      await dispatch(fetchAllPokemonDesc(id));
    };
    const getAllPokemon = async () => {
      await dispatch(fetchAllPokemon());
    };
    catchSinglePokemon(id);
    getPokemonDesc(id);
    getAllPokemon();
  }, [id, dispatch]);

  const secondGen1 = async () => {
    await dispatch(fetchSecondGenPokemon());
    await dispatch(fetchThirdGenPokemon());
  };

  useEffect(() => {
    secondGen1();
    setSelectValue(pokemon.name);
  }, [pokemon.name]);

  const pokeList = (id: any) => {
    if (id <= 151)
      return allPokemon.map((poke, index) => (
        <option key={index} value={poke.name}>
          {poke.name}
        </option>
      ));
    if (id > 151 && id <= 251)
      return secondGen.map((poke, index) => (
        <option key={index} value={poke.name}>
          {poke.name}
        </option>
      ));
    if (id > 251)
      return thirdGen.map((poke, index) => (
        <option key={index} value={poke.name}>
          {poke.name}
        </option>
      ));
  };

  return (
    <div className="container1">
      <header className="card-header">
        ID: {pokemon.id}
        <select
          value={selectValue}
          name="name"
          id="name"
          onChange={(e) => change(e)}
        >
          {pokeList(pokemon.id)}
        </select>
        <div className="types">{getTypes(pokemon)}</div>
      </header>
      <div className="mainCard">
        <div className="imageCard">
          <img
            className="oneImg"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt=""
          />
          {/* <div className="poke-weight">
            <p style={{ borderBottom: "1px solid black" }}>Height & Weight</p>
            <div>{(pokemon.height * 0.328).toFixed(2)} ft</div>
            {pokemon.weight * 0.22} lb
          </div> */}
        </div>
        {pokemon.stats[0].base_stat !== 0 && (
          <div className="statRow">
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
        <div style={{ marginRight: "10px", marginLeft: "10px" }}>
          <hr style={{ marginBlock: "10px" }} />
          {pokemonDesc.flavor_text_entries &&
            pokemonDesc.flavor_text_entries[0].flavor_text}{" "}
        </div>
        <button>Previous</button>
        <button onClick={() => nextPokemon(pokemon.id)}>Next</button>
      </div>
    </div>
  );
};

export default PokeInfo;
