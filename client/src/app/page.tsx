"use client";

import React, { useEffect } from "react";
import "./home.css";

// images
import firstGenImg from "../../public/images/pokemon_151.png";
import secondGenImg from "../../public/images/Pokemon-G2-Photoroom.png";
import thirdGenImg from "../../public/images/third.png";
import PokemonImage from "src/components/PokemonImage";

const Home = () => {
  return (
    <div className="home-container ">
      <PokemonImage
        image={firstGenImg}
        title={"Original 151"}
        link={"first-gen"}
      />

      <PokemonImage
        image={secondGenImg}
        title={"Second Gen"}
        link={"second-gen"}
      />

      <PokemonImage
        image={thirdGenImg}
        title={"Third Gen"}
        link={"third-gen"}
      />
    </div>
  );
};

export default Home;
