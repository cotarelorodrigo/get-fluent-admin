import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TablaDeDenuncias from '../TablaDeDenuncias/TablaDeDenuncias';

const server = "http://tp1-tdp2-backend-dev.herokuapp.com/";
// denuncias/longo.gnr%40hotmail.com



const DetallePorDenunciado = ({denunciado, ...props}) => {
    const [perfil, setPerfil] = useState([]);
    const [users, setUsers] = useState([]);
    const [denuncias, setDenuncias] = useState([]);
    const keysToKeep = ['denunciante', 'completeName', 'motivo', 'timestamp', 'estado']

    const formatDenuncias = (denuncias, users) => {
        var mapped = denuncias.map(d => 
            ({...d, ...users.find(u => u.email === d.denunciante)}))
          
        mapped.forEach(r => {
            r['completeName'] = r['name'] + ' ' + r['lastName'];
            r = Object.keys(r)
                .filter(key => keysToKeep.includes(key))
                .reduce((obj, key) => {
                    obj[key] = r[key];
                    return obj;
                }, {});
        });
        return mapped;
    }

    useEffect(() => {
        axios.get(server + 'user/?email=' + denunciado)
        .then(userResponse => {
            setUsers(userResponse.data.users)
            axios.get(server + 'denuncias/' + denunciado)
            .then(response => {
                let formatted = formatDenuncias(response.data.denuncias, userResponse.data.users);
                console.log('Formatted is ', formatted)
                setDenuncias(formatted);
            });    
        })
    }, []);
    useEffect(() => {
        axios.get(server + 'user/' + denunciado)
        .then(response => {
            console.log('response para perfil es ', response.data);
            setPerfil(response.data);
        });
    }, []) 
    

    return (
        <>
            <div className="denuncias"> 
                <h1>Detalle por denunciado: {denunciado}</h1>
                <div className="table">
                    <TablaDeDenuncias denuncias={denuncias}/>
                </div>
            </div>
        </>
    )
};

export default DetallePorDenunciado;