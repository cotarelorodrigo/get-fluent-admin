import React from 'react'
import ReactApexChart from "react-apexcharts";

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
    options: {
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
    },
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

export default function  ActividadesBox() {

    return (
        <div style={{width: '500px', height: '400px'}}>
            <ReactApexChart options={state.options} series={state.series} type="line" height={200} />
            <ReactApexChart options={state.optionsLine2} series={state.seriesLine2} type="line" height={200} />
        </div>
    )
}