import Map, {Marker,NavigationControl,Popup,FullscreenControl,GeolocateControl,} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";
import geolocation from "geolocation"
import axios from "axios"

function Fleetman() {
  useEffect(() => {
    const interval = setInterval(() => {
        geolocation.getCurrentPosition(async function (err, position) {
            if (err) {
                console.log(err)
                return;
            }

            const res = await axios.patch(`http://localhost:8000/v1/geolocation/638a4b2b0ac168714c8865a1`, {lat:  position.coords.latitude, long: position.coords.longitude});
            console.log(res.data);
        })
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div >
    </div>
  );
}

export default Fleetman;