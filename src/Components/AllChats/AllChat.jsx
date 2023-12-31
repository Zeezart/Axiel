import React from 'react'
import './all-chat.css'
import Header from '../Sub-Component/header/header'
import Chats from '../Sub-Component/chats/chats'
import Navbar from '../Navbar/Navbar'

function AllChat(){
    return(
        <div className='allChat'>
            <Header />
            <Chats />
            <Chats />
            <Navbar />
        </div>
    )
}

export default AllChat