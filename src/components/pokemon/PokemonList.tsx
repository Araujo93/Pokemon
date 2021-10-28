import React, {useState, useEffect} from 'react'
import PokeCard from './PokeCard';

interface IPokemon {
    name: string
    url: string
}

const PokemonList = () => {
    const [ pokemon, setPokemon ] = useState<IPokemon[]>([]);
    useEffect(() => {
        const getPokemon = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151/')
            const data = await res.json()
                setPokemon(data.results)
    }
    getPokemon()
}, [])
    // console.log(pokemon)
    return (
        <div className='pokemonList'>
           {pokemon && pokemon.map((item: IPokemon, index) => (
              <PokeCard key={index} item={item}/>
           ))}
        </div>
    )
}

export default PokemonList
