'use client';

import React from 'react';
import {auth} from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');

  async function loginUser() {

    console.log(email, password);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const token = userCredential.user.accessToken;
        localStorage.setItem('accessToken', token);
        // console.log(user);
        // console.log(user);
        setStatus('Logged in');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setStatus("Incorrect email or password. Please try again.");
        // ..
      });
    } catch(e) {
      console.log(e);
    }

  }

  return (
  <>
  <div className='flex flex-col items-center '>
    <h1>Login</h1>
    <input type="text" className='self-center text-black' onChange={(e) => { setEmail(e.target.value)}} placeholder='email' />
    <input type="text" className='self-center text-black' onChange={(e) => { setPassword(e.target.value)}} placeholder='password'/>
    <input type="button" onClick={loginUser} value="Login" />
    <div>{status}</div>
  </div>
  </>
  )
}
