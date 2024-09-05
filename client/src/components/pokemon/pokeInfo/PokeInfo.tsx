"use client";

import React from "react";

// next
import { useRouter } from "next/navigation";

// hooks
import { useGetEvolutions } from "src/hooks/useGetEvolutions";

// components
import PokemonDescription from "./PokemonDescription";
import PokeStatsAndTypes from "./PokeStatsAndTypes";
import PokemonEvolutions from "./PokemonEvolutions";
import Loader from "src/components/loader";

// css
import "./pokeInfo.css";

const PokeInfo = ({ id }) => {
  const {
    pokemonAbililties,
    pokemonDesc,
    pokemonEvo,
    pokemonInfo,
    pokemonInfoLoading,
  } = useGetEvolutions({ id });

  const router = useRouter();

  const nextPokemon = async (id: number) => {
    router.replace(`/about/${id + 1}`);
  };

  const previousPokemon = async (id: any) => {
    router.replace(`/about/${id - 1}`);
  };

  return (
    <>
      {pokemonInfoLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 200,
            height: "100%",
            width: "100%",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div className="pokemon-card-container">
          <h1 className="pokemon-header">
            {pokemonInfo.name}{" "}
            <span className="pokemon-id"> #{pokemonInfo.id}</span>
          </h1>
          <PokemonDescription
            pokemonInfo={pokemonInfo}
            pokemonDesc={pokemonDesc}
            pokemonAbililties={pokemonAbililties}
          />

          <PokeStatsAndTypes pokemonInfo={pokemonInfo} />

          <PokemonEvolutions pokemonEvo={pokemonEvo} />

          <div className="div btn-container">
            <button
              className="btn"
              onClick={() =>
                previousPokemon(pokemonInfo.id ? pokemonInfo.id : +id)
              }
            >
              Previous{" "}
            </button>
            <button
              className="btn"
              onClick={() => nextPokemon(pokemonInfo.id ? pokemonInfo.id : +id)}
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  return {
    props: {
      id,
    },
  };
}

export default PokeInfo;
