import React, { useState } from "react";

import { useHistory } from 'react-router-dom';
import "./Login.css"

export default function Login() {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        user: '',
        password: ''
    })
    // eslint-disable-next-line
    const [invalidCredentials, setInvalidCredentials] = useState(false)
  
    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        console.log(credentials.user); // the name of the form element
        console.log(credentials.password)
        if(credentials.user === 'admin' & credentials.password === 'admin'){
            history.push('/home')
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
        <div class='Back'>
            <div class='Login'>
                <form onSubmit={handleSubmit}>
                    <h1>Get Fluent</h1>
                    <div>
                        <input onChange={handleChange} name='user' type='text' placeholder='User' value={credentials.user}/>
                    </div>
                    <div>
                        <input onChange={handleChange} name='password' type='password' placeholder='Password' value={credentials.password} />
                    </div>
                    {invalidCredentials? (<strong>Invalid Credentials</strong>): (null) }
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }