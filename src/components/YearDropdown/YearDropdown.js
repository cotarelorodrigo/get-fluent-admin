import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default class YearDropdown extends Component {
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Año
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2021</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
