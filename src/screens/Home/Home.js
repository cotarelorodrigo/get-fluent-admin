import React from 'react'
import "./Home.css"
import DenunciasBox from '../../components/DenunciasBox/DenunciasBox'
import ActividadesBox from '../../components/ActividadesBox/ActividadesBox'
import MapBox from '../../components/MapBox/MapBox'
import TopPaisesBox from '../../components/TopPaisesBox/TopPaisesBox'
import MonthDropdown from '../../components/MonthDropdown/MonthDropdown'
import YearDropdown from '../../components/YearDropdown/YearDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Home() {

    return (        
        <div class="div-main">                   
            <Container>
                <Row>
                    <Col xs={1}>
                        <MonthDropdown/>
                    </Col>
                    <Col>
                        <YearDropdown/>
                    </Col>                                        
                </Row>             
                <Row>
                    <Col>
                        <ActividadesBox/>
                    </Col>
                    <Col>
                        <DenunciasBox/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <MapBox año={2021} mes={7}/>
                    </Col>
                    <Col>
                        <TopPaisesBox/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}