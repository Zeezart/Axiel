import React from 'react'
import './chatbox.css'
import { FaArrowLeft, FaEllipsisV, FaPhone } from 'react-icons/fa'

function ChatBox(){
    return(

            <div className='chatbox'>
                <div className='chatbox-details'>
                    
                    <div className='contact-info'>
                        <FaArrowLeft />
                        <img src='src/images/lara.jpg' />
                        <div className='name'>
                            <h3>Lara</h3>
                            <p><i>typing</i></p>
                        </div>
                    </div>
                    
                    <div>
                        <FaPhone className='chatbox-icons'/>
                        <FaEllipsisV className='chatbox-icons'/>
                    </div>
                </div>  
                <input />  
            </div>
    )
}

export default ChatBox