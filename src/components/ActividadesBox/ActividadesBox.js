import React, {useEffect, useState} from 'react'
import ReactApexChart from "react-apexcharts";
import server from '../../server'
import axios from 'axios';

//https://canvasjs.com/react-charts/line-chart/
//[{ x: '2021/02/01', y: 24 }, { x: '2021/02/02', y: 18 }]

const state = {
    series: [{
        name: "Usuarios activos",
        data: [
            [1486684800000, 34], 
            [1486771200000, 43], 
            [1486857600000, 31] , 
            [1486944000000, 43], 
            [1487030400000, 33], 
            [1487116800000, 52]
          ]
    }],

    seriesLine2: [{
        name: "# Mensajes",
        data: [
            [1486684800000, 65], 
            [1486771200000, 23], 
            [1486857600000, 31] , 
            [1486944000000, 11], 
            [1487030400000, 86], 
            [1487116800000, 24]
          ]
    }],
    optionsLine2: {
        chart: {
            id: 'tw',
            type: 'line',
            height: 200
        },
        colors: ['#546E7A'],
        yaxis: {
            labels: {
                minWidth: 40
            }
        },
        xaxis: {
            type: 'datetime'
        }
    }
}

export default function  ActividadesBox({desde, hasta}) {

    const options = {
        chart: {
            id: 'fb',
            type: 'line',
            height: 200
        },
        colors: ['#008FFB'],
        yaxis: {
            labels: {
                minWidth: 40
            }
        },
        xaxis: {
            type: 'datetime'
        }
    }

    const options2 = {
        chart: {
            id: 'tw',
            type: 'line',
            height: 200
        },
        colors: ['#546E7A'],
        yaxis: {
            labels: {
                minWidth: 40
            }
        },
        xaxis: {
            type: 'datetime'
        }
    }

    const [seriesUserActivos, setseriesUserActivos] = useState([{
        name: "Usuarios activos",
        data: []
    }])

    const [seriesCantMensajes, setseriesCantMensajes] = useState([{
        name: "# Mensajes",
        data: []
    }])

    useEffect(() => {
        let endpoint = server + `stats/?desde=${desde}&hasta=${hasta}`
        console.log("Endpoint: " + endpoint)
        axios.get(endpoint)
        .then(response => {
            let dataByDate = response.data
            console.log(dataByDate['stats'])
            let series1 = []
            let series2 = []
            dataByDate['stats'].forEach(day => {
                const dayK = Object.keys(day)
                console.log("Key: " + dayK)
                console.log("User activos: " + day[dayK]['users_activos'].length)
                console.log("# Mensajes: " + day[dayK]['mensajes'])
                series1.push([dayK, day[dayK]['users_activos'].length])
                series2.push([dayK, day[dayK]['mensajes']])
            })
            setseriesUserActivos([{name: "Usuarios activos", data: series1}])
            setseriesCantMensajes([{name: "# Mensajes", data: series2}])
        })
    
    }, [desde, hasta])

    return (
        <div style={{width: '500px', height: '400px'}}>
            <ReactApexChart options={options} series={seriesUserActivos} type="line" height={200} />
            <ReactApexChart options={options2} series={seriesCantMensajes} type="line" height={200} />
        </div>
    )
}