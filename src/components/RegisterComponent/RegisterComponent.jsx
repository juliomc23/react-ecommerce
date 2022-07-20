import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { IconContext } from "react-icons";

function RegisterComponent() {

    const navigate = useNavigate();
    const [msgError, setMsgError] = useState('');

    const createUser = async (e) => {

        e.preventDefault();
        const name = e.target.name.value
        const lastname = e.target.lastname.value
        const email = e.target.email.value
        const password = e.target.password.value
        // const co_password = e.target.co_password.value

        const dbUsers = await getUsers();

        const exist = dbUsers.find(user => user.email === email ? true : false)

        if(exist){
            setMsgError('Duplicated email')
        }else{
            console.log(exist)
            console.log("this email, does not exist")
            try {
                const req = await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        lastname: lastname,
                        email: email,
                        password: password
                    })
                });

                const res = await req.json()
                
                localStorage.setItem('user', JSON.stringify(res.name));
                navigate("/", {replace: true})
            } catch (error) {
                console.error(error)
            }
        }
    }

    const getUsers = async () => {
        const req = await fetch('http://localhost:3004/users')
        const res = await req.json();
        return res
    }
    
    return (
        <form onSubmit={(e) => { createUser(e) }}>
            <input type='text' name='name' placeholder='First Name' />
            <input type='text' name='lastname' placeholder='Last Name' />
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />
            <input type='password' name='co_password' placeholder='Confirm your password' />
            <button>Register me</button>
            <span>Registered? <Link to='/login'>Login</Link> here</span>
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

export default RegisterComponent