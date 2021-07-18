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
            let dataDash = [{country: 'Chile', value: 5}, {country: 'Bolivia', value: 10}, {country: 'España', value: 10}, {country:'Italia', value: 6}] //Mock
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
                    topCountries.map((c, i) => (
                        <strong>{i + 1}. {c['country']}: {c['value']}<br></br></strong>
                    ))
                }
            </div>
        )
}
