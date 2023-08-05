import React from 'react'
import './navbar.css'
import { FaCamera, FaPhone, FaComment, FaUser, FaUserFriends } from 'react-icons/fa'

function Navbar(){
    return(
        <div className='navbar'>
            <FaCamera />
            <FaPhone />
            <FaComment />
            <FaUser />
            <FaUserFriends />
        </div>
    )
}

export default Navbar