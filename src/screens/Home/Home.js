import React, { useState } from 'react'
import "./Home.css"
import DenunciasBox from '../../components/DenunciasBox/DenunciasBox'
import ActividadesBox from '../../components/ActividadesBox/ActividadesBox'
import MapBox from '../../components/MapBox/MapBox'
import TopPaisesBox from '../../components/TopPaisesBox/TopPaisesBox'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
    const [startDate, setStartDate] = useState(new Date(2020, 12, 1))
    const [endDate, setEndDate] = useState(new Date(2021, 1, 1))

    const dateToString = (date) => {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }

    return (        
        <div class="div-main">                   
            <Container>
                <Row>
                    <Col>
                        <strong>Desde: </strong>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd"/>
                    </Col>
                    <Col>
                        <strong>Hasta: </strong>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}  dateFormat="yyyy-MM-dd"/>
                    </Col>                           
                </Row>             
                <Row style={{height: "550px"}}>
                    <Col>
                        <MapBox desde={dateToString(startDate)} hasta={dateToString(endDate)}/>
                    </Col>
                    <Col>
                        <ActividadesBox desde={dateToString(startDate)} hasta={dateToString(endDate)}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <TopPaisesBox desde={dateToString(startDate)} hasta={dateToString(endDate)}/>
                    </Col>
                    <Col>
                        <DenunciasBox desde={dateToString(startDate)} hasta={dateToString(endDate)}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}