import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TablaDeDenuncias from '../TablaDeDenuncias/TablaDeDenuncias';
import Perfil from '../Perfil/Perfil';

import './DetallePorDenunciado.css'

const server = "http://tp1-tdp2-backend-dev.herokuapp.com/";
// denuncias/longo.gnr%40hotmail.com



const DetallePorDenunciado = ({denunciado, ...props}) => {
    const [perfil, setPerfil] = useState([]);
    // const [users, setUsers] = useState([]);
    const [denuncias, setDenuncias] = useState([]);
    const keysToKeep = ['denunciante', 'completeName', 'motivo', 'timestamp', 'estado']

    const formatDenuncias = (denuncias, users) => {
        var merged = denuncias.map(d => 
            ({...d, ...users.find(u => u.email === d.denunciante)}));
        merged = merged.map(m => {
            m['completeName'] = m['name'] + ' ' + m['lastName']
            m['timestamp'] = Date.parse(m.timestamp)
            return m
        }).sort((x, y) => {
            return x.timestamp - y.timestamp;
        })
        merged = merged.map(m => {
            const formatDate = (timestamp) =>{
                var x=new Date(timestamp);
                var dd = x.getDate();
                var mm = x.getMonth()+1;
                var yy = x.getFullYear();
                return dd +"/" + mm+"/" + yy;
             }        
            return {
                completeName: m.name + ' ' + m.lastName,
                email: m.email,
                motivo: m.motivo,
                // fecha: formatDate(Date.parse(m.timestamp)),
                fecha: formatDate(m.timestamp),
                estado: m.estado
            }
        });
        return merged;
    }

    useEffect(() => {
        axios.get(server + 'user/?email=' + denunciado)
        .then(userResponse => {
            // setUsers(userResponse.data.users)
            axios.get(server + 'denuncias/' + denunciado)
            .then(response => {
                setDenuncias(formatDenuncias(response.data.denuncias, userResponse.data.users));
            });    
        })
    }, []);
    useEffect(() => {
        axios.get(server + 'user/' + denunciado)
        .then(response => {
            console.log('response para perfil es ', response.data);
            setPerfil(response.data.data);
        });
    }, []) 
    

    return (
        <>
            <div className="denuncias"> 
                <h1>Detalle por denunciado: {denunciado}</h1>
                <div className="profile">
                    <Perfil user={perfil}/>
                </div>
                <div className="table">
                    <TablaDeDenuncias denuncias={denuncias}/>
                </div>
            </div>
        </>
    )
};

export default DetallePorDenunciado;