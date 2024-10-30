import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function SignUp(){

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
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
      await axios.post("auth/signup", inputs)  ///   https://the-article-site.vercel.app/api/auth/signup
      navigate("/login")
    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
        <h1>SignUp</h1>
        <form>
            <input required type='text' placeholder='Username' name='username' onChange={handleChange} />
            <input required type='email' placeholder='email' name='email' onChange={handleChange} />
            <input required type='password' placeholder='Password' name='password' onChange={handleChange} />
            <button className='authButton' onClick={handleClick}>SignUp</button>
            {err && <p>{err}</p>}
            <span>Already have an accout?<Link className='signup' to="/login"> Login </Link></span>
        </form>
        
    </div>
  )
}

export default SignUp;