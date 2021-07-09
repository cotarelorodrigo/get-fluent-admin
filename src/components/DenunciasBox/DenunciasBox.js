import React, { Component } from 'react'

export default class DenunciasBox extends Component {
    state = {
        box: {width: '200px', height: '130px', border: '2px solid black'},
    };
    
    
    render() {
        return <div style={this.state.box}>
            <h2>Denuncias</h2>
            <h3>Total: 10</h3>
            <h3>Pendientes: 5</h3>
            </div>;
    }
}
