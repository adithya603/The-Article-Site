import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  function handleChange(e){
    // setInput(prev=> ({...prev, [e.target.name]: e.target.value}))

    setInputs(function(prev){
      return({
        ...prev, 
        [e.target.name] : e.target.value
      })
    })
  }

  const handleClick = async (e) =>{
    e.preventDefault()
    try{
      await axios.post("/auth/login", inputs)
      navigate("/")
    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='Username' name='username' onChange={handleChange}/>
            <input type='password' placeholder='Password' name="password" onChange={handleChange}/>
            <button onClick={handleClick}>Login</button>
            {err && <p>{err}</p>}
            <span>Don't have an account?<Link to="/SignUp">Sign Up</Link></span>
        </form>
        
    </div>
  )
}

export default Login;