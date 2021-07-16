import React, { useState , useEffect} from 'react'
import server from '../../server'
import axios from 'axios';

export default function TopPaisesBox({desde, hasta}) {
    const [topCountries, setTopCountries] = useState([])
    const TOP = 5

    useEffect(() => {
        let endpoint = server + `stats/countries?desde=${desde}&hasta=${hasta}&iso=false`
        console.log("Endpoint: " + endpoint)
        axios.get(endpoint)
        .then(response => {
            let dataCountry = response.data
            console.log(dataCountry['stats'])
            let dataDash = [{country: 'Chile', value: 200000}, {country: 'Bolivia', value: 23232424}, {country: 'España', value: 21419129}, {country:'Italia', value: 21402041}, {country:'Canada', value: 0}] //Mock
            for (const [country, valueCountry] of Object.entries(dataCountry['stats'])) {
                dataDash.push({country: country, value: valueCountry})
            }
            dataDash = dataDash.sort((a, b) => {
                if (a['value'] > b['value']) 
                    return -1
                else 
                    return 1
            })
            dataDash = dataDash.slice(0, TOP)
            setTopCountries(dataDash)  
        })
    
    }, [desde, hasta])

 
        return (
            <div style={{width: '500px', height: '200px'}}>
                <h2>Top {TOP} [Usuarios Activos]</h2>
                {
                    topCountries.map((c) => (
                        <strong>{c['country']}: {c['value']}<br></br></strong>
                    ))
                }
            </div>
        )
}
