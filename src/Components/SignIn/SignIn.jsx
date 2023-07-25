import React from 'react'
import './sign-in.css'
import Logo from '../Sub-Component/logo/logo'
import Axiel from '/src/images/logo.svg'
function SignIn(){
    return(
        <>
        <section>
            
            <div className='welcome-text'>
                <h1>Welcome Back!</h1>
                <p>Enter your details</p>
            </div>

            <div className='input-details'>
                <input placeholder='Email Address' type='email' />
                <input placeholder='Password' type='password' />
                <p className='forgot-password'>Forgot Password</p>
            </div>

            <div className='login-button'>
                <button>Login</button>
                <p className='sign-up'>Don't have an account? Sign Up</p>
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