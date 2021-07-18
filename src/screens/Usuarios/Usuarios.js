import React from 'react'
import ListaUsuarios from '../../components/ListaUsuarios'
import "./Usuarios.css"


export default function Usuarios() {

    return (
        <div class="div-main-usuarios">
                <div className='title'>
                    <h1>Usuarios</h1>
                </div>
                <div className='list-users'>
                    <ListaUsuarios/>
                </div>
        </div>
    )
}