import React from 'react'
import "./Home.css"
import DenunciasBox from '../../components/DenunciasBox/DenunciasBox'
import ActividadesBox from '../../components/ActividadesBox/ActividadesBox'
import MapBox from '../../components/MapBox/MapBox'
import TopPaisesBox from '../../components/TopPaisesBox/TopPaisesBox'


export default function Home() {

    return (        
        <div class="div-main">
            <div class="flexbox-container">
                <div class="flexbox-item-1">
                    <ActividadesBox/>  
                </div>
                <div class="flexbox-item-2">
                    <DenunciasBox/>  
                </div>
                <div class="flexbox-item-3">
                    <MapBox/>  
                </div>
                <div class="flexbox-item-4">
                    <TopPaisesBox/>  
                </div>                                               
            </div>
        </div>
    )
}