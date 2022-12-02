import Map, {Marker,NavigationControl,Popup,FullscreenControl,GeolocateControl,} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState ,useEffect } from "react";
import axios from "axios"


function App() {
  const [long, setlong] = useState(77.376331);
  const [lat, setLat] = useState(28.5577517);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res =  await axios.get(`http://localhost:8000/v1/geolocation/638a4b2b0ac168714c8865a1`);
        
        console.log(res);

        setLat(res.data.lat)
        setlong(res.data.long)
      }
      catch(error) {
        console.log(error)
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Map
        mapboxAccessToken="pk.eyJ1IjoieXV2cmFqMTEwMSIsImEiOiJjbGIxa293NXQwN2wwM3dwaWE5NTVoYWZtIn0.RIxfkPe7PXwiZ1wzkvTfew"
        style={{
          width: "100vw",
          height: "100vh",
        }}
        initialViewState={{
          longitude: long,
          latitude: lat,
          zoom: 8
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={long} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
  );
}

export default App;