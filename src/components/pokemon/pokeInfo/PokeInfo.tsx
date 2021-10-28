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
{base_stat: number,stat:  { name:string}
},
{base_stat: number,stat:  { name:string}
},
{base_stat: number,stat:  { name:string}
},
{base_stat: number,stat:  { name:string}
},
]
types: [
    {
        slot: number, type: {
            name: string
        }
        
    },
   { slot: number, type: {
        name: string}
    }
]
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
    
    const getTypes = () => {
      return pokemon.types && pokemon.types.map(({type}) => { 
            if(type.name === 'fighting') return <span className='fighting'>{type.name}</span>
            if(type.name === 'fire') return <span className='fire'>{type.name}</span>
            if(type.name === 'water') return <span className='water'>{type.name}</span>
            if(type.name === 'earth') return <span className='earth'>{type.name}</span>
            if(type.name === 'rock') return <span className='rock'>{type.name}</span>
            if(type.name === 'ghost') return <span className='ghost'>{type.name}</span>
            if(type.name === 'bug') return <span className='bug'>{type.name}</span>
            if(type.name === 'poison') return <span className='poison'>{type.name}</span>
            if(type.name === 'blah') return <span className='blah'>{type.name}</span>
      
        })
    
    }


    return (
      <div className='container1'> 
         <div className='mainCard'>
            <header className='card-header'>{pokemon.id}
            <div>
            {getTypes()}
            </div>
            </header>
            {pokemon.stats && 
            <>
            <img className='oneImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="" /> 
            {/* <h3>{pokemon.name}</h3> */}
            <div className='statRow'> 
           
              {pokemon.stats.map((stat) => {
                  return <div className='test'   key={stat.stat.name} >
                            {stat.stat.name}
                              <div className='progressBar'>
                                <div className='stats' style={{width: `${stat.base_stat / 255 * 100}%`}}>{stat.base_stat}</div>
                              </div>
                            
                              </div>
                             
                              
              })}
            </div>
            </>
            }
        </div>
        </div>
    )
}

export default PokeInfo
