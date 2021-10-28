import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Navbar = () => {
    return (
        <div className='container' >
                <h1>Poke World</h1>
            <ul className='nav' >
                <li className='listItem'><Link to='/Home'>Home</Link></li>
                <li className='listItem'><a href="">Shiny</a></li>
                <li className='listItem'><a href="">Something</a></li>
                <li className='listItem'><a href="">About</a></li>  
            </ul>
        </div>
    )
}

export default Navbar
