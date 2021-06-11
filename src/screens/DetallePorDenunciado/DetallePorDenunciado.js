import React, { useEffect, useState } from 'react';
import axios from 'axios';

const server = "http://tp1-tdp2-backend-dev.herokuapp.com/";
// denuncias/longo.gnr%40hotmail.com



const DetallePorDenunciado = ({denunciado, ...props}) => {
    const [denuncias, setDenuncias] = useState({});

    useEffect((denuncias) => {
        console.log('Pase por aca ')
        axios.get(server + 'denuncias/' + denunciado)
        .then(response => {
            console.log('response es ', response.data);
            setDenuncias(response.data);
        });
    }, []);

    

    return (
        <>
            <div className="denuncias"> 
                <h1>Detalle por denunciado: {denunciado}</h1>
            </div>
        </>
    )
};

export default DetallePorDenunciado;