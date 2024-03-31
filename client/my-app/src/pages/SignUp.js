import React from 'react'
import { Link } from 'react-router-dom';

function SignUp(){
  return (
    <div className='auth'>
        <h1>SignUp</h1>
        <form>
            <input required type='text' placeholder='Username' />
            <input required type='email' placeholder='email' />
            <input required type='password' placeholder='Password' />
            <button>SignUp</button>
            <p>This is an error</p>
            <span>Already have an accout?<Link to="/login">Login </Link></span>
        </form>
        
    </div>
  )
}

export default SignUp;