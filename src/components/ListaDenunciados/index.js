import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const columns = [
                    {
                        label: 'Denunciado',
                        field: 'denunciado',
                    },
                    {
                        label: '#',
                        field: 'cantidad_denuncias',
                        sort: 'asc'
                    },
                    {
                        label: 'Fecha',
                        field: 'fecha',
                        sort: 'asc'
                    }
                ]  


export default function ListaDenunciados({ searchKeyword }) {
    const [usersWithDenuncias, setusersWithDenuncias] = useState([])


    useEffect(() => {
        Promise.all([
            fetch("http://localhost:8000/denuncias/").then(res => res.json()),
            fetch("http://localhost:8000/user/?email=all").then(res => res.json())
        ]).then(([denuncias, usuarios]) => {
            console.log("Denuncias: " + denuncias)
            console.log("Users: " + usuarios)
            const denunciasGroupByUser = denuncias["denuncias"].reduce((acc, it) => {
                acc[it.denunciado] = acc[it.denunciado] + 1 || 1;
                return acc
            }, {})
            usuarios["users"].forEach(user => {
                if(user["email"] in denunciasGroupByUser){
                    user["cantidad_denuncias"] = denunciasGroupByUser[user["email"]]
                } else {
                    user["cantidad_denuncias"] = 0
                }
            })
            usuarios = usuarios["users"].filter(user => user["cantidad_denuncias"] > 0)
            if (searchKeyword) {
                usuarios = usuarios.filter(user => user["name"].startsWith(searchKeyword))
            }
            usuarios.forEach(user => {
                var dates = denuncias["denuncias"]
                                .filter(denuncia => denuncia["denunciado"] === user["email"])
                                .map(denuncia => { return new Date(denuncia["timestamp"].split(',')[0]) })
                var lastDenuncia = new Date(Math.max.apply(null, dates))
                var dd = String(lastDenuncia.getDate()).padStart(2, '0');
                var mm = String(lastDenuncia.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = lastDenuncia.getFullYear();
                user["ultima_denuncia"] = yyyy + '-' + mm + '-' + dd
            })

            usuarios = usuarios.map(user => {
                return {
                    denunciado: user.name,
                    cantidad_denuncias: user.cantidad_denuncias,
                    fecha: user.ultima_denuncia
                }
            });
            setusersWithDenuncias(usuarios)
        })
    
    }, [searchKeyword])

    return (
        <MDBTable scrollY maxHeight="50vh">
            <MDBTableHead columns={columns} />
            <MDBTableBody rows={usersWithDenuncias} />
        </MDBTable>
    )
}