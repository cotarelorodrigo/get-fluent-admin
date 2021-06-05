import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useLocation } from "wouter"
import "./Login.css"

export default function Login() {
    const [credentials, setCredentials] = useState({
        user: '',
        password: ''
    })
    // eslint-disable-next-line
    const [invalidCredentials, setInvalidCredentials] = useState(false)
    const [path, pushLocation] = useLocation()
  
    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        console.log(credentials.user); // the name of the form element
        console.log(credentials.password)
        if(credentials.user === 'admin' & credentials.password === 'admin'){
            pushLocation('/home')
        } else {
            setInvalidCredentials(true)
        }
    }

    const handleChange = evt => {
        setCredentials(
            {
                ...credentials,
                [evt.target.name]: evt.target.value
            }
        )
    }
  
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='user'>User</label>
                    <br></br>
                    <input onChange={handleChange} name='user' type='text' placeholder='User' value={credentials.user}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <br></br>
                    <input onChange={handleChange} name='password' type='password' placeholder='Password' value={credentials.password} />
                </div>
                {invalidCredentials? (<strong>Invalid Credentials</strong>): (null) }
                <div>
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </>
    );
  }