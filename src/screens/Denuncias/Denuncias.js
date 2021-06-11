import React from 'react'
import DetallePorDenunciado from "../DetallePorDenunciado/DetallePorDenunciado"
import "./Denuncias.css"

export default function Denuncias({history}) {

    // const denunciado = "longo.gnr@hotmail.com"
    const denunciado = "rorroeche@hotmail.com"

    return (
        <>
            <DetallePorDenunciado history={history} denunciado={denunciado}/>
        </>
    )
}