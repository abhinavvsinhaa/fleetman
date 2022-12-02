import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Fleetman from "./pages/Fleetman"

function App() {

  return <Routes>
          <Route index element={<Home />}/>
          <Route path="/fleetman" element={<Fleetman />}/>
         </Routes>
}

export default App;