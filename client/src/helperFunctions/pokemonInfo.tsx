import { IOnePokemon } from "../interfaces/interfaces";

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

export const getTypes = (pokemon: IOnePokemon) => {
  return (
    pokemon.types &&
    pokemon.types.map(({ type }) => {
      if (type.name === "fighting")
        return (
          <span key={type.name + "A"} className="fighting">
            {type.name}
          </span>
        );
      if (type.name === "fire")
        return (
          <span key={type.name + "B"} className="fire">
            {type.name}
          </span>
        );
      if (type.name === "water")
        return (
          <span key={type.name + "C"} className="water">
            {type.name}
          </span>
        );
      if (type.name === "ground")
        return (
          <span key={type.name + "D"} className="ground">
            {type.name}
          </span>
        );
      if (type.name === "rock")
        return (
          <span key={type.name + "E"} className="rock">
            {type.name}
          </span>
        );
      if (type.name === "ghost")
        return (
          <span key={type.name + "F"} className="ghost">
            {type.name}
          </span>
        );
      if (type.name === "bug")
        return (
          <span key={type.name + "2"} className="bug">
            {type.name}
          </span>
        );
      if (type.name === "poison")
        return (
          <span key={type.name + "G"} className="poison">
            {type.name}
          </span>
        );
      if (type.name === "grass")
        return (
          <span key={type.name + "H"} className="grass">
            {type.name}
          </span>
        );
      if (type.name === "steel")
        return (
          <span key={type.name + "I"} className="steel">
            {type.name}
          </span>
        );
      if (type.name === "fairy")
        return (
          <span key={type.name + "J"} className="fairy">
            {type.name}
          </span>
        );
      if (type.name === "ice")
        return (
          <span key={type.name + "1"} className="ice">
            {type.name}
          </span>
        );
      if (type.name === "dragon")
        return (
          <span key={type.name + "K"} className="dragon">
            {type.name}
          </span>
        );
      if (type.name === "dark")
        return (
          <span key={type.name + "L"} className="dark">
            {type.name}
          </span>
        );
      if (type.name === "psychic")
        return (
          <span key={type.name + "3"} className="psychic">
            {type.name}
          </span>
        );
      if (type.name === "flying")
        return (
          <span key={type.name + "M"} className="flying">
            {type.name}
          </span>
        );
      if (type.name === "electric")
        return (
          <span key={type.name + "N"} className="electric">
            {type.name}
          </span>
        );
      if (type.name === "normal")
        return (
          <span key={type.name + "O"} className="normal">
            {type.name}
          </span>
        );
      if (type.name === "fairy")
        return (
          <span key={type.name + "P"} className="fairy">
            {type.name}
          </span>
        );
      else {
        return null;
      }
    })
  );
};
