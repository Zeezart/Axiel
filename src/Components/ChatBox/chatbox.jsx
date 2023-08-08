import React from 'react'
import './chatbox.css'
import { FaArrowLeft, FaEllipsisV, FaPaperPlane, FaPhone } from 'react-icons/fa'

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
                
                <div className='messages'>
                    <p className='sent'>hello how are you doing, how are things going at your end, hope you are doing good, just trying to create a lomg message</p>
                    <p className='received'>hello how are you doing, how are things going at your end, hope you are doing good, just trying to create a lomg message</p>
                    <p className='sent'>okay</p>

                    
                </div>
                <div className='textbox-area'>
                    <input className='textbox'/>
                    <FaPaperPlane className='send-icon'/>  
                </div> 
            </div>
    )
}

export default ChatBox