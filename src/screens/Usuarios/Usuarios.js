import React, {useState} from 'react'
import ListaUsuarios from '../../components/ListaUsuarios'
import "./Usuarios.css"


export default function Usuarios() {
    const [searchKeyword, setSearchKeyword] = useState('')

    return (
        <div class="div-main">
                <div className='title'>
                    <h1>Usuarios</h1>
                </div>
                <div className='list-users'>
                    <ListaUsuarios/>
                </div>
        </div>
    )
}