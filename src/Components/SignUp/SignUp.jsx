import React from 'react'
import './sign-up.css'
import Logo from '../Sub-Component/logo/logo'
import Axiel from '/src/images/logo.svg'
function SignIn(){
    return(
        <>
        <section>
            
            <div className='welcome-text'>
                <h1>Join Axiel Now</h1>
                <p>Create an account to start chatting.</p>
            </div>

            <div className='input-details'>
                <input placeholder='Email Address' type='email' />
                <input placeholder='Password' type='password' />
                <input placeholder='Confirm Password' type='password' />
            </div>

            <div className='signup-button'>
                <button>Create Account</button>
                <p className='login'>Already have an account? Login</p>
            </div>

            <div className='logo'>
                {/* <Logo/>
                <Axiel /> */}
                <img src='src/images/logo.svg' />
            </div>
        </section>
        </>
    )
}

export default SignIn