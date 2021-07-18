import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
// import { MDBBtn } from 'mdbreact';
import TablaDeDenuncias from '../../components/TablaDeDenuncias/TablaDeDenuncias';
import Perfil from '../../components/Perfil/Perfil';
import server from '../../server'

// import '../Denuncias/Denuncias.css'
// import '../../components/Sidebar/Sidebar.css'
import './DetallePorDenunciado.css'
// import Sidebar from '../../components/Sidebar/Sidebar.js'

const desestimarDenuncia = (denunciado, denunciante) => {
    const endpoint = server + 'denuncias/?denunciado=' + denunciado + '&denunciante=' + denunciante + '&estado=Desestimada'
    console.log('Endpoint is ', endpoint)
    axios.put(endpoint)
        .then(response => {
            if (response.status === 200) {
                window.location.reload();
            } else {
                console.log('error: ', response.status, ' ---- ', response.data)
                alert('Error interactuando con la denuncia')
            }
        })
}

const DetallePorDenunciado = ({denunciado, ...props}) => {
    const [perfil, setPerfil] = useState([]);
    const [denuncias, setDenuncias] = useState([]);
    if (denunciado === undefined) {
        const urlSplitted = window.location.href.split('/')
        denunciado = urlSplitted[urlSplitted.length-1]
    }

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
                return dd + "/" + mm + "/" + yy;
            }
            return {
                completeName: m.name + ' ' + m.lastName,
                email: m.email,
                motivo: m.motivo,
                fecha: formatDate(m.timestamp),
                estado: m.estado,
                accion: (m.estado !== 'Pendiente' ? <></>:<button className='button' 
                    onClick={() => desestimarDenuncia(denunciado, m.email)}>x</button>)
            }
        });

        merged.sort((a, b) => {
            if (a.estado > b.estado)
              return -1;
            if (a.estado < b.estado)
              return 1;
            return 0;
        })

        return merged;
    }

    useEffect(() => {
        axios.get(server + 'user/?email=all')
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
    

    return ( perfil.email ? 
        <>
            <div className="denuncias"> 
                <div className="profile">
                    <Perfil user={perfil}/>
                </div>               
                <div className="table">
                    <h3>Denuncias</h3> 
                    <TablaDeDenuncias denuncias={denuncias}/>
                </div>
            </div>
        </> :  <span>Cargando perfil...</span>
    )
};

export default DetallePorDenunciado;