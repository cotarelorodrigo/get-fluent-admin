import React from 'react'
import ListaDenunciados from '../../components/ListaDenunciados'
import "./Denuncias.css"

export default function Denuncias() {


    return (
        <div class="div-main">
            <div class="flexbox-container">
                <div class="flexbox-item flexbox-item-1"></div>
                <div class="flexbox-item flexbox-item-2"></div>
                <div class="flexbox-item flexbox-item-3">
                    <ListaDenunciados />
                </div>
            </div>
        </div>
    )
}