import React, { Component } from 'react'
import { WorldMap } from "react-svg-worldmap"

const data =
    [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 },  // united states
      { country: "id", value: 264935824 },  // indonesia
      { country: "pk", value: 210797836 },  // pakistan
      { country: "br", value: 210301591 },  // brazil
      { country: "ng", value: 208679114 },  // nigeria
      { country: "bd", value: 161062905 },  // bangladesh
      { country: "ru", value: 141944641 },  // russia
      { country: "mx", value: 127318112 }   // mexico
    ]

export default class MapBox extends Component {
    state = {
        box: {width: '500px', height: '400px', border: '2px solid black'},
    };
    
    
    render() {
        return (
            <div style={this.state.box}>
                <WorldMap color="red" title="" value-suffix="people" size="lg" data={data} />
            </div>
        )
    }
}