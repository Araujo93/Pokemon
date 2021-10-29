import React from "react";
import { Link } from "react-router-dom";
import {
  getBackImg,
  getFrontImg,
  getIndex,
} from "../../../helperFunctions/pokemonInfo";

import { Item } from "../../../interfaces/interfaces";

const PokeCard = ({ item }: Item) => {
  return (
    <div className="card">
      <Link to={`/about/${getIndex(item.url)}`} className="front face">
        <div># {getIndex(item.url)}</div>
        <img src={getFrontImg(item.url)} alt="" />
        <div>{item.name}</div>
      </Link>
      <Link to={`/about/${getIndex(item.url)}`} className="back face">
        <div># {getIndex(item.url)}</div>
        <img src={getBackImg(item.url)} alt="" />
        <div className="">{item.name}</div>
      </Link>
    </div>
  );
};

export default PokeCard;
