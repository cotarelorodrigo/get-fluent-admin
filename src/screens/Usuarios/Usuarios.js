import React, {useState} from 'react'
import ListaUsuarios from '../../components/ListaUsuarios'
import "./Usuarios.css"


export default function Usuarios() {
    const [searchKeyword, setSearchKeyword] = useState('')

    return (
        <div class="div-main">
            <div class="flexbox-container">
                <div class="flexbox-item flexbox-item-1">
                    <h1>Usuarios</h1>
                </div>
                <div class="flexbox-item flexbox-item-3">
                    <ListaUsuarios/>
                </div>
            </div>
        </div>
    )
}