import React from "react";

import { getTypes, getWeakness } from "src/helperFunctions/pokemonInfo";

import "../pokeInfo.css";

const PokeStatsAndTypes = ({ pokemonInfo }) => {
  return (
    <div className="pokemon-info">
      {pokemonInfo.stats[0].base_stat !== 0 && (
        <div className="statRow">
          <h2>Stats</h2>
          {pokemonInfo.stats.map((stat) => {
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
        <div className="types-container">
          <h2>Types</h2>
          <div className="pokemon-types ">{getTypes(pokemonInfo)}</div>
        </div>
        <div className="weakness-container">
          <h2>Weaknesses</h2>
          <div className="pokemon-types ">
            {getWeakness(pokemonInfo, "weak")}
          </div>
        </div>
        <div className="strength-container">
          <h2>Strength</h2>
          <div className="pokemon-types ">
            {getWeakness(pokemonInfo, "str")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeStatsAndTypes;
