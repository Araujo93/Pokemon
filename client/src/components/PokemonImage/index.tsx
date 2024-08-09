import React from "react";

// next
import Link from "next/link";

// css
import "./pokemonImage.css";
import Tooltip from "../Tooltip";

const PokemonImage = ({ image, title, link }: any) => {
  return (
    <div className={`pokemon-image-container`}>
      <Tooltip content={title} direction="center" delay={"100"} size={24}>
        <Link href={`${link}`}>
          <img className="pokemon-image" src={image.src} alt="" />
        </Link>
      </Tooltip>
    </div>
  );
};

export default PokemonImage;
