import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import img from '../../assets/pokemon_151.png'
const Home = () => {
    return (
        <>
        <label htmlFor="search">Search</label>
            <input name='search' type="text" />
        <div className='layout'>
            <Link to='/'>
                <div>
                <h1>Original 151</h1>
                <img className='img' src={img} alt="" />
                </div>
            </Link>
        </div>
        </>
    )
}

export default Home
