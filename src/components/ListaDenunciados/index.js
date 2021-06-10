import React from 'react'
import Table from 'react-bootstrap/Table'

const USERS_INFO = [{'nombre':'Mona', 'cantidad_denuncias':5, 'fecha':'2021-06-01'}, 
                    {'nombre':'Cota', 'cantidad_denuncias':3, 'fecha':'2021-05-13'},
                    {'nombre':'Nico', 'cantidad_denuncias':2, 'fecha':'2021-03-08'}]

export default function ListaDenunciados() {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Denunciado</th>
                    <th>#</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {
                    USERS_INFO.map(denunciado => 
                        <tr>
                            <td>{denunciado.nombre}</td>
                            <td>{denunciado.cantidad_denuncias}</td>
                            <td>{denunciado.fecha}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}