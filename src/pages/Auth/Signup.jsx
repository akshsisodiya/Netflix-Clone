import React, { useRef } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import './Signup.css'


function Signup(props) {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then(
      (authUser) => {
        console.log(authUser)
      }
    ).catch(err => {
      alert(err.message)
    })
  }

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then(
      (authUser) => {
        console.log(authUser)
      }
    ).catch(err => {
      alert(err.message)
    })
  }
  const prevEmail = props.email
  return (
    <div className="signup-screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='email' />
        <input ref={passwordRef} type="password" placeholder='password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className='signup-screen-gray'>New to Netflix? </span>
          <span className="signup-screen-link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default Signup