import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import server from '../../server'

const columns = [
                    {
                        label: 'Nombre',
                        field: 'name',
                    },
                    {
                        label: 'Email',
                        field: 'email'
                    },
                    {
                        label: 'Comentario',
                        field: 'comment',
                    },
                    {
                        label: 'Fecha',
                        field: 'date',
                    }
                ]  


export default function ListaFeedbacks({ email }) {
    const [usersWithFeedbacks, setusersWithFeedbacks] = useState([])


    useEffect(() => {
        Promise.all([
            fetch(server + "feedback/?comentado=" + email).then(res => res.json())
        ]).then(([feedbacks]) => {
        
            feedbacks = feedbacks["feedbacks"]
            console.log("Feedbacks: " + feedbacks)

            feedbacks = feedbacks.map(feedback => {
                
                return {
                    name: feedback.name + " " + feedback.lastName,
                    email: feedback.comentador,
                    comment: feedback.comentario,
                    date: feedback.timestamp
                }
            });

            setusersWithFeedbacks(feedbacks)
        })
    
    }, [])

    return (
        <MDBTable scrollY maxHeight="50vh">
            <MDBTableHead columns={columns} />
            <MDBTableBody rows={usersWithFeedbacks} />
        </MDBTable>
    )
}