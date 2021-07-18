import React, {useState} from 'react'
import ListaDenunciados from '../../components/ListaDenunciados'
import "./Denuncias.css"


export default function Denuncias() {
    return (
        <div class="div-main-denuncias">
            <div class="flexbox-container">
                <div class="flexbox-item flexbox-item-1">
                    <h1>Denuncias</h1>
                </div>
                <div class="flexbox-item flexbox-item-3">
                    <ListaDenunciados/>
                </div>
            </div>
        </div>
    )
}