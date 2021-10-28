import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Navbar = () => {
    return (
        <div className='container' >
                <h1>Poke World</h1>
            <ul className='nav' >
                <li className='listItem'><Link to='/Home'>Home</Link></li>
                <li className='listItem'><Link to="#">Shiny</Link></li>
                <li className='listItem'><Link to="">Something</Link></li>
                <li className='listItem'><Link to="">About</Link></li>  
            </ul>
        </div>
    )
}

export default Navbar
