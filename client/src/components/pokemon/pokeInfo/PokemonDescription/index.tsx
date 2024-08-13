import React from "react";

import "../pokeInfo.css";

const PokemonDescription = ({
  pokemonInfo,
  pokemonDesc,
  pokemonAbililties,
}) => {
  return (
    <div className="pokemon-main">
      <img
        className="pokemon-info-image"
        src={`https://img.pokemondb.net/artwork/large/${pokemonInfo.name}.jpg`}
        alt=""
      />
      <div className="pokemon-description">
        {pokemonDesc.flavor_text_entries &&
          pokemonDesc.flavor_text_entries[0].flavor_text}{" "}
        <div className="poke-weight">
          <h4 className="stat-header">Height</h4>
          <p> {(pokemonInfo.height * 0.328).toFixed(2)} ft</p>
          <h4 className="stat-header weight-header ">Weight</h4>
          <p> {pokemonInfo.weight * 0.22} lb</p>
          <h4 className="stat-header weight-header ">Abilities</h4>
          <p className="ability-name">{pokemonAbililties.name}</p>
          <p>
            {pokemonAbililties.effect_entries &&
              pokemonAbililties.effect_entries[1].short_effect}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDescription;
