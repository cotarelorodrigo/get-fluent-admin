import React, { useState , useEffect} from 'react'
import server from '../../server'
import axios from 'axios';

export default function DenunciasBox({desde, hasta}){
    const [statsDenuncias, setStatsDenuncias] = useState({'Recibidas': 0, 'Resueltas': 0, 'Pendientes': 0})

    useEffect(() => {
        let endpoint = server + `stats/denuncias?desde=${desde}&hasta=${hasta}`
        console.log("Endpoint: " + endpoint)
        axios.get(endpoint)
        .then(response => {
            console.log("Denuncias")
            console.log(response.data)
            setStatsDenuncias(response.data['stats']) 
        })
    }, [desde, hasta])
       
    return (
        <div style={{width: '500px', height: '200px'}}>
            <h3>Estadísticas de denuncias</h3>
            <strong>Denuncias que ingresaron: {statsDenuncias['Recibidas']}</strong><br></br>
            <strong>Denuncias que se resolvieron: {statsDenuncias['Resueltas']}</strong><br></br>
            <strong>Denuncias por resolver: {statsDenuncias['Pendientes']}</strong><br></br>
            <strong>Total histórico de denuncias por resolver: {statsDenuncias['Pendientes_historico']}</strong><br></br>
        </div>
    )
    
}
