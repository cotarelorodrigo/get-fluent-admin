import React, { Component } from 'react'

export default class TopPaisesBox extends Component {
    state = {
        box: {width: '200px', height: '130px', border: '2px solid black'},
    };
    
    
    render() {
        return <div style={this.state.box}>
            <h2>Top Paises</h2>
            <h3>Pais: 1</h3>
            <h3>Pais: 1</h3>
            <h3>Pais: 1</h3>
            <h3>Pais: 1</h3>
            <h3>Pais: 1</h3>
            </div>;
    }
}
