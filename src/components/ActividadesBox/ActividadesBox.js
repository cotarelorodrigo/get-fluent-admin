import React, { Component } from 'react'

export default class ActividadesBox extends Component {
    state = {
        box: {width: '700px', height: '300px', border: '2px solid black'},
    };
    
    
    render() {
        return <div style={this.state.box}>
            </div>;
    }
}