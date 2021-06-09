import React, { useState } from "react";
import { useLocation } from "wouter"
import "./Login.css"

export default function Login() {
    const [credentials, setCredentials] = useState({
        user: '',
        password: ''
    })
    // eslint-disable-next-line
    const [invalidCredentials, setInvalidCredentials] = useState(false)
    const [invalidUser, setInvalidUser] = useState(false)
    const [path, pushLocation] = useLocation()
  
    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        console.log(credentials.user); // the name of the form element
        console.log(credentials.password)
        setInvalidCredentials(false)
        setInvalidUser(false)
        if(credentials.user === 'admin' & credentials.password === 'admin'){
            pushLocation('/home')
        } else if (credentials.user === 'admin'){
            setInvalidCredentials(true)
        } else {
            setInvalidUser(true)
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
                        <input onChange={handleChange} name='user' type='text' placeholder='Usuario' value={credentials.user}/>
                    </div>
                    <div>
                        <input onChange={handleChange} name='password' type='password' placeholder='Contraseña' value={credentials.password} />
                    </div>
                    {invalidCredentials? (<strong>Credenciales inválidas</strong>): (null) }
                    {invalidUser? (<strong>Acceso restringido para usuarios administradores</strong>): (null) }
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }