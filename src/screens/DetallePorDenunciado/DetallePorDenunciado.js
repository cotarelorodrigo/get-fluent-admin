import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { MDBBtn } from 'mdbreact';
import TablaDeDenuncias from '../../components/TablaDeDenuncias/TablaDeDenuncias';
import Perfil from '../../components/Perfil/Perfil';

import './DetallePorDenunciado.css'
const server = "http://tp1-tdp2-backend-dev.herokuapp.com/";

const DetallePorDenunciado = ({denunciado, ...props}) => {
    const [perfil, setPerfil] = useState([]);
    const [denuncias, setDenuncias] = useState([]);
    if (denunciado === undefined) {
        const urlSplitted = window.location.href.split('/')
        denunciado = urlSplitted[urlSplitted.length-1]
    }
    console.log('denunciado is ', denunciado)

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
                fecha: formatDate(m.timestamp),
                estado: m.estado,
                // accion: <MDBBtn color="purple" size="sm">Button</MDBBtn>
            }
        });
        return merged;
    }

    useEffect(() => {
        axios.get(server + 'user/?email=' + denunciado)
        .then(userResponse => {
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
            <Breadcrumb>
                <Breadcrumb.Item href="http://localhost:3000/denuncias">Denuncias</Breadcrumb.Item>
                <Breadcrumb.Item active>{perfil.name} {perfil.lastName}</Breadcrumb.Item>
            </Breadcrumb>

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