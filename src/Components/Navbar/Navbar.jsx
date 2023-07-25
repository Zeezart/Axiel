import React from 'react'
import './navbar.css'
import { FaCamera, FaPhone } from 'react-icons/fa'

function Navbar(){
    return(
        <div className='navbar'>
            <FaCamera />
            <FaPhone />
        </div>
    )
}

export default Navbar