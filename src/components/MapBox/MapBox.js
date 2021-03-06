import React, { useState, useEffect } from "react";
import { WorldMap } from "react-svg-worldmap"
import server from '../../server'
import axios from 'axios';


export default function MapBox({desde, hasta}) {
    const [dataPerCountry, setDataPerCountry] = useState([])


    useEffect(() => {
        let endpoint = server + `stats/countries?desde=${desde}&hasta=${hasta}&iso=true`
        console.log("Endpoint: " + endpoint)
        axios.get(endpoint)
        .then(response => {
            let dataCountry = response.data
            console.log(dataCountry['stats'])
            let dataDash = [{country: 'cl', value: 5}, {country: 'es', value: 4}, {country:'it', value: 6}] //Mock
            for (const [country, valueCountry] of Object.entries(dataCountry['stats'])) {
                dataDash.push({country: country, value: valueCountry})
              }
            console.log(dataDash)
            setDataPerCountry(dataDash)  
        })
    
    }, [desde, hasta])

    
    return (
            <div style={{width: '500px', height: '520px'}}>
                <h3>Usuarios activos por país</h3>
                <WorldMap color="red" title="" value-suffix="people" size="lg" data={dataPerCountry} />
            </div>
    )
}