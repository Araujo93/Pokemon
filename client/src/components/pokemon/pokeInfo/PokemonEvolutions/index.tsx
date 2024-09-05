import React from "react";

const PokemonEvolutions = ({ pokemonEvo }) => {
  return (
    <div className="pokemon-evo-container">
      <h2 className="evolution-header">Evolutions</h2>
      <div className="tester">
        {pokemonEvo &&
          pokemonEvo.map((el: any) => (
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
  );
};

export default PokemonEvolutions;
