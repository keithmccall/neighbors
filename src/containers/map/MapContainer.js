import React, { Component } from "react";
import Map from "../../components/maps/Map";
import { GOOGLE_KEY } from "../../keys";
export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 40.7128,
        lng: -74.006
      },
      zoom: 11,
      size: {
        height: "400px",
        width: "400px"
      }
    };
  }
  moveLocation = latLng => {
    const { lat, lng } = latLng;
    this.setState({
      center: {
        lat,
        lng
      }
    });
  };
  adjustZoom = action => {
    this.setState({
      zoom: this.state.zoom + action
    });
  };

  render() {
    return (
      <Map
        googleKey={GOOGLE_KEY}
        center={this.state.center}
        zoom={this.state.zoom}
        size={this.state.size}
        adjustZoom={this.adjustZoom}
        moveLocation={this.moveLocation}
      />
    );
  }
}

export default MapContainer;
