import React, { useState, useEffect } from "react";
import { MDBDataTable} from 'mdbreact';
import server from '../../server'

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
                        field: 'cantidad_denuncias'
                    },
                    {
                        label: 'Fecha',
                        field: 'fecha'
                    },
                    {
                        label: ' ',
                        field: 'ver'
                    }
                ]  


export default function ListaDenunciados() {
    const [usersWithDenuncias, setusersWithDenuncias] = useState([])


    useEffect(() => {
        Promise.all([
            fetch(server + "denuncias/").then(res => res.json()),
            fetch(server + "/user/?email=all").then(res => res.json())
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
                const link = "http://localhost:3000/usuarios/" + user.email
                return {
                    denunciado: user.name + " " + user.lastName,
                    email: user.email,
                    cantidad_denuncias: user.cantidad_denuncias,
                    fecha: user.ultima_denuncia,
                    ver: <a href={link}>Ver</a>
                }
            });

            usuarios.sort(function(a,b){
                return b.cantidad_denuncias - a.cantidad_denuncias
            })

            setusersWithDenuncias({'columns': columns, "rows": usuarios})
        })
    
    }, [])


    return (
        <MDBDataTable 
            entriesLabel="Mostrar"
            searchLabel="Buscar"
            paginationLabel={["Anterior", "Siguiente"]}
            infoLabel={["Mostrando", "a", "de", "entradas"]}
            order={["cantidad_denuncias", "desc"]}
            striped 
            bordered 
            small 
            data={usersWithDenuncias}>
        </MDBDataTable>
    )
}