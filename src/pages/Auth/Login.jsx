import React, { useRef, useState } from 'react'
import './Login.css'
import Signup from './Signup'

function Login() {

    const [singIn, setSignIn] = useState(false)
    const email = useRef()
    return (
        <div className='login-screen'>
            <div className="login-screen-background">
                <img className='login-screen-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
                <button className='login-screen-button'
                    onClick={() => setSignIn(true)}
                >Sign In</button>
                <div className="login-screen-gradient"></div>
            </div>
            <div className="login-screen-body">
                {singIn ? <Signup email={email.current.value} /> : (
                    <>
                        <h1>
                            Unlimited films, TV programmes and more.
                        </h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="login-screen-input">
                            <form>
                                <input ref={email} type="email" placeholder='Email Address' />
                                <button onClick={() => setSignIn(true)} className='login-screen-get-started'>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Login