import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
//import withScriptjs from 'react-google-maps/lib/async/withScriptjs';


const ComponentMap = (props) => {
  return (
    <div>
      <GoogleMap defaultZoom={7.5}
        defaultCenter={{ lat: 19.0000000, lng: -70.6667000 }}>
        <Marker position={{ lat: 18.474568, lng: -69.931028 }} />

      </GoogleMap></div>
  )
}

export default withScriptjs(
  withGoogleMap(
    ComponentMap
  )
)