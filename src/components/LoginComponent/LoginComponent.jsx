import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { IconContext } from "react-icons";
import { useState } from 'react';
import { useEffect } from 'react';

function LoginComponent() {

  const [users, setUser] = useState({});
  const [msgError, setMsgError] = useState('');
  const navigate = useNavigate();

  const getUser = async () =>{
    const req = await fetch('http://localhost:3004/users')
    const res = await req.json();

    setUser(res)
  }
  
  useEffect(() => {
    getUser();
  }, [])

  const login = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password =e.target.password.value;

    users.map(user => {
      if(user.email === email && user.password === password){
        localStorage.setItem('user', JSON.stringify(user.name));
        navigate("/checkout", {replace: true})
      }else{
        setMsgError('Invalid data');
      }
      return user
    })
  }
  
  return (

    <form onSubmit={(e) => login(e)}>
      <input type='email' name='email' placeholder='Email' />
      <input type='password' name='password' placeholder='Password' />
      <button>Go in</button>
      <span>Not registered? <Link to='/register'>Register</Link> here</span>
      <p>{msgError}</p>
      <div>
        <IconContext.Provider value={{ size: "2rem" }}>
          <span>Continue with Google</span><FcGoogle />
          <span>Continue with Apple</span><GrApple />
        </IconContext.Provider>

      </div>
    </form>
  )
}

export default LoginComponent