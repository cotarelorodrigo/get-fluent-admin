import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const columns = [
                    {
                        label: 'Denunciante',
                        field: 'completeName',
                    },
                    {
                        label: 'Email',
                        field: 'email',
                    },
                    {
                        label: 'Motivo',
                        field: 'motivo',
                    },
                    {
                        label: 'Fecha',
                        field: 'fecha',
                        sort: 'asc'
                    },
                    {
                        label: '',
                        field: 'accion',
                    }
                ]  

const TablaDeDenuncias = ({denuncias}) => {
        // const newDenuncias = denuncias.slice()
        // newDenuncias.forEach(r => {
        //     r['accion'] = <MDBBtn color="purple" size="sm">Button</MDBBtn>
        // })
        return (
        <MDBTable scrollY>
            <MDBTableHead columns={columns} />
            <MDBTableBody rows={denuncias} />
        </MDBTable>
    )
}

export default TablaDeDenuncias;