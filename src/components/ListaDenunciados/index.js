import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const columns = [
                    {
                        label: 'Denunciado',
                        field: 'denunciado',
                    },
                    {
                        label: 'Email',
                        field: 'email'
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
                    },
                    {
                        label: ' ',
                        field: 'ver'
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
                usuarios = usuarios.filter(user => user["name"].toLowerCase().startsWith(searchKeyword.toLowerCase()))
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
                const link = "http://localhost:3000/denunciado/" + user.email
                return {
                    denunciado: user.name + " " + user.lastName,
                    email: user.email,
                    cantidad_denuncias: user.cantidad_denuncias,
                    fecha: user.ultima_denuncia,
                    ver:  <a href={link}>Ver</a> 
                }
            });

            usuarios.sort(function(a,b){
                return new Date(a.fecha) - new Date(b.fecha)
            })

            setusersWithDenuncias(usuarios)
        })
    
    }, [searchKeyword])

    return (
        <MDBTable scrollY maxHeight="30vh">
            <MDBTableHead columns={columns} />
            <MDBTableBody rows={usersWithDenuncias} />
        </MDBTable>
    )
}