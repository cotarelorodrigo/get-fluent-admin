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
    const [isCurrentlyLoading, setIsCurrentlyLoading] = useState(true)


    useEffect(() => {
        Promise.all([
            fetch(server + "feedback/?comentado=" + email).then(res => res.json())
        ]).then(([feedbacks]) => {
        
            feedbacks = feedbacks["feedbacks"]
            console.log("Feedbacks: " + feedbacks)

            feedbacks = feedbacks.map(feedback => {

                let dateToParse = new Date(feedback["timestamp"])

                console.log("Timestamp: " + dateToParse)

                let dd = String(dateToParse.getDate()).padStart(2, '0')
                let mm = String(dateToParse.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = dateToParse.getFullYear();
                
                return {
                    name: feedback.name + " " + feedback.lastName,
                    email: feedback.comentador,
                    comment: feedback.comentario,
                    date: dd + '/' + mm + '/' + yyyy
                }
            });
            setusersWithFeedbacks(feedbacks)
            setIsCurrentlyLoading(false)
        })
    
    }, [])

    return (
        <>
        {
            (usersWithFeedbacks.length !== 0) ?
                <MDBTable scrollY maxHeight="30vh">
                    <MDBTableHead columns={columns} />
                    <MDBTableBody rows={usersWithFeedbacks} />
                </MDBTable>
                :
                <>
                    {
                        isCurrentlyLoading ?
                            <h5> </h5>
                        :
                            <h5>Este usuario no tiene referencias aún</h5>
                    }
                </>
        }
        </>
    )
}