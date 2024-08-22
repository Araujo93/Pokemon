import { IOnePokemon } from "../interfaces/interfaces";
import pokemon_types from "../types/pokemon_types.json";

import { PokemonStrAndWeak } from "../interfaces/pokemon";

export const getFrontImg = (url: string) => {
  const index = url.split("/")[url.split("/").length - 2];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
};

export const getBackImg = (url: string) => {
  const index = url.split("/")[url.split("/").length - 2];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`;
};

export const getIndex = (url: string) => {
  const index = url.split("/")[url.split("/").length - 2];
  return index;
};

export const getWeakness = (pokemon: IOnePokemon, strOrWeak: string) => {
  if (pokemon.types && pokemon.types[0].type.name) {
    const types = pokemon.types.map((type) => type.type.name);
    if (types) {
      const weaknesses: PokemonStrAndWeak = getMultipliers(types);

      if (strOrWeak === "weak") {
        const pokemonTypes: string[] = Object.keys(weaknesses.defense);

        return (
          pokemonTypes.length > 0 &&
          pokemonTypes.map((type: string) => {
            if (type === "fighting" && weaknesses.defense[type] >= 2)
              return (
                <span key={type + "A"} className="fighting poketype">
                  {type}
                </span>
              );
            if (type === "fire" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "B"} className="fire poketype">
                  {type}
                </span>
              );
            if (type === "water" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "C"} className="water poketype">
                  {type}
                </span>
              );
            if (type === "ground" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "D"} className="ground poketype">
                  {type}
                </span>
              );
            if (type === "rock" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "E"} className="rock poketype">
                  {type}
                </span>
              );
            if (type === "ghost" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "F"} className="ghost poketype">
                  {type}
                </span>
              );
            if (type === "bug" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "2"} className="bug poketype">
                  {type}
                </span>
              );
            if (type === "poison" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "G"} className="poison poketype">
                  {type}
                </span>
              );
            if (type === "grass" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "H"} className="grass poketype">
                  {type}
                </span>
              );
            if (type === "steel" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "I"} className="steel poketype">
                  {type}
                </span>
              );
            if (type === "fairy" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "J"} className="fairy poketype">
                  {type}
                </span>
              );
            if (type === "ice" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "1"} className="ice poketype">
                  {type}
                </span>
              );
            if (type === "dragon" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "K"} className="dragon poketype">
                  {type}
                </span>
              );
            if (type === "dark" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "L"} className="dark poketype">
                  {type}
                </span>
              );
            if (type === "psychic" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "3"} className="psychic poketype">
                  {type}
                </span>
              );
            if (type === "flying" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "M"} className="flying poketype">
                  {type}
                </span>
              );
            if (type === "electric" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "N"} className="electric poketype">
                  {type}
                </span>
              );
            if (type === "normal" && (weaknesses.defense[type] as any) >= 2)
              return (
                <span key={type + "O"} className="normal poketype">
                  {type}
                </span>
              );
            else {
              return null;
            }
          })
        );
      } else {
        const pokemonTypes = Object.keys(weaknesses.attack);

        return (
          pokemonTypes.length > 0 &&
          pokemonTypes.map((type: string) => {
            if (type === "fighting" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "A"} className="fighting poketype">
                  {type}
                </span>
              );
            if (type === "fire" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "B"} className="fire poketype">
                  {type}
                </span>
              );
            if (type === "water" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "C"} className="water poketype">
                  {type}
                </span>
              );
            if (type === "ground" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "D"} className="ground poketype">
                  {type}
                </span>
              );
            if (type === "rock" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "E"} className="rock poketype">
                  {type}
                </span>
              );
            if (type === "ghost" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "F"} className="ghost poketype">
                  {type}
                </span>
              );
            if (type === "bug" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "2"} className="bug poketype">
                  {type}
                </span>
              );
            if (type === "poison" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "G"} className="poison poketype">
                  {type}
                </span>
              );
            if (type === "grass" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "H"} className="grass poketype">
                  {type}
                </span>
              );
            if (type === "steel" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "I"} className="steel poketype">
                  {type}
                </span>
              );
            if (type === "fairy" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "J"} className="fairy poketype">
                  {type}
                </span>
              );
            if (type === "ice" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "1"} className="ice poketype">
                  {type}
                </span>
              );
            if (type === "dragon" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "K"} className="dragon poketype">
                  {type}
                </span>
              );
            if (type === "dark" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "L"} className="dark poketype">
                  {type}
                </span>
              );
            if (type === "psychic" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "3"} className="psychic poketype">
                  {type}
                </span>
              );
            if (type === "flying" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "M"} className="flying poketype">
                  {type}
                </span>
              );
            if (type === "electric" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "N"} className="electric poketype">
                  {type}
                </span>
              );
            if (type === "normal" && weaknesses.attack[type] >= 2)
              return (
                <span key={type + "O"} className="normal poketype">
                  {type}
                </span>
              );
            else {
              return null;
            }
          })
        );
      }
    }
  }
};

export const getTypes = (pokemon: IOnePokemon) => {
  return (
    pokemon.types &&
    pokemon.types.map(({ type }) => {
      if (type.name === "fighting")
        return (
          <span key={type.name + "A"} className="fighting poketype">
            {type.name}
          </span>
        );
      if (type.name === "fire")
        return (
          <span key={type.name + "B"} className="fire poketype">
            {type.name}
          </span>
        );
      if (type.name === "water")
        return (
          <span key={type.name + "C"} className="water poketype">
            {type.name}
          </span>
        );
      if (type.name === "ground")
        return (
          <span key={type.name + "D"} className="ground poketype">
            {type.name}
          </span>
        );
      if (type.name === "rock")
        return (
          <span key={type.name + "E"} className="rock poketype">
            {type.name}
          </span>
        );
      if (type.name === "ghost")
        return (
          <span key={type.name + "F"} className="ghost poketype">
            {type.name}
          </span>
        );
      if (type.name === "bug")
        return (
          <span key={type.name + "2"} className="bug poketype">
            {type.name}
          </span>
        );
      if (type.name === "poison")
        return (
          <span key={type.name + "G"} className="poison poketype">
            {type.name}
          </span>
        );
      if (type.name === "grass")
        return (
          <span key={type.name + "H"} className="grass poketype">
            {type.name}
          </span>
        );
      if (type.name === "steel")
        return (
          <span key={type.name + "I"} className="steel poketype">
            {type.name}
          </span>
        );
      if (type.name === "fairy")
        return (
          <span key={type.name + "J"} className="fairy poketype">
            {type.name}
          </span>
        );
      if (type.name === "ice")
        return (
          <span key={type.name + "1"} className="ice poketype">
            {type.name}
          </span>
        );
      if (type.name === "dragon")
        return (
          <span key={type.name + "K"} className="dragon poketype">
            {type.name}
          </span>
        );
      if (type.name === "dark")
        return (
          <span key={type.name + "L"} className="dark poketype">
            {type.name}
          </span>
        );
      if (type.name === "psychic")
        return (
          <span key={type.name + "3"} className="psychic poketype">
            {type.name}
          </span>
        );
      if (type.name === "flying")
        return (
          <span key={type.name + "M"} className="flying poketype">
            {type.name}
          </span>
        );
      if (type.name === "electric")
        return (
          <span key={type.name + "N"} className="electric poketype">
            {type.name}
          </span>
        );
      if (type.name === "normal")
        return (
          <span key={type.name + "O"} className="normal poketype">
            {type.name}
          </span>
        );
      else {
        return null;
      }
    })
  );
};

////////////////////////////////////

export default function getMultipliers(types: any) {
  var multipliers: any = {
    defense: {},
    attack: {},
  };
  types.forEach((type: string) => {
    var damage_relations = pokemon_types[type as keyof typeof pokemon_types];
    var no_damage_to = damage_relations.attack.zero;
    var no_damage_from = damage_relations.defense.zero;
    var half_damage_to = damage_relations.attack.half;
    var half_damage_from = damage_relations.defense.half;
    var double_damage_to = damage_relations.attack.double;
    var double_damage_from = damage_relations.defense.double;
    no_damage_to.forEach((type: string) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 0;
      } else {
        multipliers.attack[type] = 0;
      }
    });
    no_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 0;
      } else {
        multipliers.defense[type] = 0;
      }
    });
    half_damage_to.forEach((type) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 0.5;
      } else {
        multipliers.attack[type] = 0.5;
      }
    });
    half_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 0.5;
      } else {
        multipliers.defense[type] = 0.5;
      }
    });
    double_damage_to.forEach((type) => {
      if (multipliers.attack.hasOwnProperty(type)) {
        multipliers.attack[type] = multipliers.attack[type] * 2;
      } else {
        multipliers.attack[type] = 2;
      }
    });
    double_damage_from.forEach((type) => {
      if (multipliers.defense.hasOwnProperty(type)) {
        multipliers.defense[type] = multipliers.defense[type] * 2;
      } else {
        multipliers.defense[type] = 2;
      }
    });
  });
  return multipliers;
}

export const getEvoltionChain = (evolutions: any) => {
  if (!evolutions || evolutions?.evolves_to.length <= 0) return [];
  const result = [] as any[];
  if (evolutions?.species) {
    result.push(evolutions.species);
  }

  let tester = evolutions.evolves_to[0];
  while (tester?.species) {
    result.push(tester.species);
    tester = tester?.evolves_to;
  }
  if (tester[0]?.species) {
    result.push(tester[0]?.species);
  }

  return result;
};
