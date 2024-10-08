import React from "react";
import Link from "next/link";
import {
  getBackImg,
  getFrontImg,
  getIndex,
} from "../../../helperFunctions/pokemonInfo";
import "./pokeCard.css";

import { Item } from "../../../interfaces/interfaces";

const PokeCard = ({ item }: Item) => {
  return (
    <div className="card">
      <Link href={`/about/${getIndex(item.url)}`} className="front face">
        <div className="poke_name"># {getIndex(item.url)}</div>
        <img src={getFrontImg(item.url)} alt="" />
        <div className="poke_name">{item.name}</div>
      </Link>
      <Link href={`/about/${getIndex(item.url)}`} className="back face">
        <div className="poke_name"># {getIndex(item.url)}</div>
        <img src={getBackImg(item.url)} alt="" />
        <div className="poke_name">{item.name}</div>
      </Link>
    </div>
  );
};

export default PokeCard;
