import React, {Component, Fragment} from "react";
import Map from "../../components/maps/Map";
import {GOOGLE_KEY} from "../../keys";


export class MapContainer extends Component {
    constructor() {
        super();
        this.state = {
            center: {
                lat: 40.7128,
                lng: -74.0060
            },
            zoom: 11,
            size: {
                height: '400px',
                width: '400px'
            }
        }
    }

    render() {
        return (
            <Map
                googleKey={GOOGLE_KEY}
                center={this.state.center}
                zoom={this.state.zoom}
                size={this.state.size}
            />
        );
    }
}

export default MapContainer;
