import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default class MonthDropdown extends Component {
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" class="dropdown-basic">
                    Mes
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
