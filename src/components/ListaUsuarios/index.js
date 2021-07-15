import React, { useState, useEffect } from "react";
import { MDBDataTable} from 'mdbreact';
import server from '../../server'

const columns = [
                    {
                        label: 'Email',
                        field: 'email',
                    },
                    {
                        label: 'Nombre',
                        field: 'nombre'
                    },
                    {
                        label: 'Apellido',
                        field: 'apellido'
                    },
                    {
                        label: 'Habla',
                        field: 'habla'
                    },
                    {
                        label: 'Aprende',
                        field: 'aprende'
                    },
                    {
                        label: 'Género',
                        field: 'genero'
                    },
                    {
                        label: ' ',
                        field: 'ver'
                    }
                ]  


export default function ListaDenunciados() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        Promise.all([
            fetch(server + "/user/?email=all").then(res => res.json())
        ]).then(([usuarios]) => {

            usuarios = usuarios["users"]
            console.log("Users: " + usuarios)

            usuarios = usuarios.map(user => {
                const link = "http://localhost:3000/denunciado/" + user.email
                return {
                    email: user.email,
                    nombre: user.name,
                    apellido: user.lastName,
                    habla: user.nativeLanguage === "Ingles" ? "Inglés" : user.nativeLanguage,
                    aprende: user.interestLanguage === "Ingles" ? "Inglés" : user.interestLanguage,
                    genero: user.gender === "Masculino" ? "M" : "F",
                    ver: <a href={link}>Ver</a>
                }
            });

            usuarios.sort(function(a,b){
                return b.cantidad_denuncias - a.cantidad_denuncias
            })

            setUsers({'columns': columns, "rows": usuarios})
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
            data={users}>
        </MDBDataTable>
    )
}