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
