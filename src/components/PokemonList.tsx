import React, {useState, useEffect} from 'react'
import { getBackImg, getIndex } from '../helperFunctions/pokemonIndex';

interface IPokemon {
    name: string
    url: string
}

const PokemonList = () => {
    const [ pokemon, setPokemon ] = useState([]);
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
               <div className='card'> 
               <a href="#">
                   <div className='pokeId'># {index+1}</div>
               <img className='front face' src={getIndex(item.url)} alt="" />
                <img className="back face" src={getBackImg(item.url)} alt="" />
               <div className='name'>{item.name}</div>
               </a>
               </div>
           ))}
        </div>
    )
}

export default PokemonList
