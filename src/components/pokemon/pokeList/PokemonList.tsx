import React, { useEffect } from "react";
import PokeCard from "../pokeCard/PokeCard";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { fetchAllPokemon } from "../../../redux/pokemonSlice";

interface IPokemon {
  name: string;
  url: string;
}

const PokemonList = () => {
  // const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const { pokemon } = useAppSelector((state: RootState) => state.pokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getPokemon = async () => {
      await dispatch(fetchAllPokemon());
    };
    getPokemon();
  }, [dispatch]);
  // console.log(pokemon)
  return (
    <div className="pokemonList background">
      {pokemon &&
        pokemon.map((item: IPokemon, index: number) => (
          <PokeCard key={index} item={item} />
        ))}
    </div>
  );
};

export default PokemonList;
