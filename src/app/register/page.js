'use client';
import React from 'react'
import {auth} from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');

  async function registerUser() {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const token = userCredential.user.accessToken;
          localStorage.setItem('accessToken', token);

          setStatus('Registered');
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setStatus("Error message");
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
    <input type="text" className='self-center text-black' onChange={(e) => {setPassword(e.target.value)}} placeholder='password'/>
    <input type="button" onClick={registerUser} value="Register" />
    <div>{status}</div>
  </div>
  </>
  )
}
