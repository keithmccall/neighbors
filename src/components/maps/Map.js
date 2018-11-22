import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const Map = props => {


    return (
        <div style={{height: props.size.height, width: props.size.width}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: props.googleKey}}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            >
                {/*<AnyReactComponent*/}
                {/*lat={40.7128}*/}
                {/*lng={-74.0060}*/}
                {/*text={'Kreyser Avrora'}*/}
                {/*/>*/}
            </GoogleMapReact>
        </div>
    );

}
export default Map