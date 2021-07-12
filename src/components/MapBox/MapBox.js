import React, { useState, useEffect } from "react";
import { WorldMap } from "react-svg-worldmap"
import server from '../../server'
import axios from 'axios';



export default function MapBox({año, mes}) {
    const [dataPerCountry, setDataPerCountry] = useState([])


    useEffect(() => {
        let endpoint = server + `stats/countries?mes=${mes}&ano=${año}`
        console.log("Endpoint: " + endpoint)
        axios.get(endpoint)
        .then(response => {
            let dataCountry = response.data
            console.log(dataCountry['stats'])
            let dataDash = [{country: 'cl', value: 200000}, {country: 'bo', value: 23232424}, {country: 'es', value: 21419129}, {country:'it', value: 21402041}] //Mock
            for (const [country, valueCountry] of Object.entries(dataCountry['stats'])) {
                dataDash.push({country: country, value: valueCountry})
              }
            console.log(dataDash)
            setDataPerCountry(dataDash)  
        })
    
    }, [año, mes])

    
    return (
            <div style={{width: '500px', height: '400px', border: '2px solid black'}}>
                <WorldMap color="red" title="" value-suffix="people" size="lg" data={dataPerCountry} />
            </div>
    )
}