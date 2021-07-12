import React, { useState, useEffect } from "react";
import { WorldMap } from "react-svg-worldmap"
import server from '../../server'
import axios from 'axios';

const mapCountry =
    {
        'Argentina': 'ar',
        "Chile": 'cl',
        "Bolivia": 'bo',
        "España": 'es',
        "Italia": 'it'
  }

export default function MapBox({año, mes}) {
    const [dataPerCountry, setDataPerCountry] = useState([])


    useEffect(() => {
        let endpoint = server + `stats/countries?mes=${mes}&ano=${año}`
        console.log("Endpoint: " + endpoint)
        axios.get(endpoint)
        .then(response => {
            let dataCountry = response.data
            console.log(dataCountry['stats'])
            let dataDash = []
            for (const [country, valueCountry] of Object.entries(dataCountry['stats'])) {
                dataDash.push({country: mapCountry[country], value: valueCountry})
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