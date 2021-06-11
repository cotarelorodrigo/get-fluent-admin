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

const USERS_INFO = [{'denunciado':'Mona', 'cantidad_denuncias':5, 'fecha':'2021-06-01'}, 
                    {'denunciado':'Cota', 'cantidad_denuncias':3, 'fecha':'2021-05-13'},
                    {'denunciado':'Nico', 'cantidad_denuncias':2, 'fecha':'2021-03-08'}]

export default function ListaDenunciados() {
    const [usersWithDenuncias, setusersWithDenuncias] = useState([])

    useEffect(() => {
        setusersWithDenuncias(USERS_INFO)
    }, [])

    return (
        <MDBTable scrollY>
            <MDBTableHead columns={columns} />
            <MDBTableBody rows={usersWithDenuncias} />
        </MDBTable>
    )
}