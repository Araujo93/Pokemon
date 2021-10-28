import React, { useEffect, useState } from 'react'
import './pokeInfo.css'
import { useParams } from 'react-router';


interface id {
    id: string
}

interface IOnePokemon {
abilities: object
base_experience: number
forms: []
game_indices: []
height: number
held_items: []
id: number
is_default: boolean
location_area_encounters: string
moves: []
name: string
order: number
past_types: []
species: object
sprites: object
stats: [
    {base_stat: number, stat: {name: string}
},
{base_stat: number,stat:  { name:string}},
{base_stat: number,stat:  { name:string}},
{base_stat: number,stat:  { name:string}},
{base_stat: number,stat:  { name:string}}



]
types: []
weight: number
}



const PokeInfo = () => {
    let { id }= useParams<id>();
    const [pokemon, setPokemon ] = useState({} as IOnePokemon)
    useEffect(() => {
        const catchSinglePokemon = async () => {
            const res =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data:IOnePokemon = await res.json()
            setPokemon(data)
        }
        catchSinglePokemon()
    }, [id])
    console.log(pokemon)
   
    return (
        
        <div className='container'>

          <div className='mainCard'>
            <img className='oneImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" />
              <h1>{pokemon.name}</h1>
              
                   <div >
                      <h3 className='statRow'>{pokemon?.stats[0]?.stat?.name}</h3>
                                  <div className='progressBar'>

                                  <div></div>
                                  </div>
                      <h3 className='statRow'>{pokemon?.stats[1]?.stat?.name}</h3>
                      <h3 className='statRow'>{pokemon?.stats[2]?.stat?.name}</h3>
                      <h3 className='statRow'>{pokemon?.stats[3]?.stat?.name}</h3>
                      <h3 className='statRow'>{pokemon?.stats[4]?.stat?.name}</h3>
                      
                      </div>
             
            </div>
        </div>
    )
}

export default PokeInfo
