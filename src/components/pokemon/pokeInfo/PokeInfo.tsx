import React, { useEffect } from "react";
import "./pokeInfo.css";
import { useParams } from "react-router";
import { getTypes } from "../../../helperFunctions/pokemonInfo";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import {
  fetchAllPokemonDesc,
  fetchAllPokemonInfo,
} from "../../../redux/pokemonSlice";
import { id } from "../../../interfaces/interfaces";

const PokeInfo = () => {
  let { id } = useParams<id>();

  const { pokemonInfo: pokemon, pokemonDesc } = useAppSelector(
    (state: RootState) => state.pokemon
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const catchSinglePokemon = async (id: string) => {
      await dispatch(fetchAllPokemonInfo(id));
    };

    const getPokemonDesc = async (id: string) => {
      await dispatch(fetchAllPokemonDesc(id));
    };
    catchSinglePokemon(id);
    getPokemonDesc(id);
  }, [id, dispatch]);

  return (
    <div className="container1">
      <header className="card-header">
        ID: {pokemon.id}
        <h3>{pokemon.name}</h3>
        <div className="types">{getTypes(pokemon)}</div>
      </header>
      <div className="mainCard">
        <div className="imageCard">
          <img
            className="oneImg"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt=""
          />
          <div className="poke-weight">
            <p style={{ borderBottom: "1px solid black" }}>Height & Weight</p>
            <div>{(pokemon.height * 0.328).toFixed(2)} ft</div>
            {pokemon.weight * 0.22} lb
          </div>
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
        <div>
          <hr />
          {pokemonDesc.flavor_text_entries &&
            pokemonDesc.flavor_text_entries[0].flavor_text}{" "}
        </div>
      </div>
    </div>
  );
};

export default PokeInfo;
