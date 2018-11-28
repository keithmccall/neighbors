import React, { Component } from "react";
import MapContainer from "../../containers/map/MapContainer";

export default class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <h2>Destination</h2>
        <MapContainer />
      </div>
    );
  }
}
