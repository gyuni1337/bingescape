'use client';

import React from 'react'
export default function Login() {

  return (
  <>
  <div className='flex flex-col items-center '>
    <h1>Login</h1>
    <input type="text" className='self-center' placeholder='email' />
    <input type="text" className='self-center' placeholder='password'/>
    <input type="button" value="Login" />

  </div>
  </>
  )
}
