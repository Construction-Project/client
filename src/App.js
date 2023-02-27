import Login from "./pages/login/login";
import Register from "./pages/register/register";

//<Route  path="/register" element={<Register />}/>
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Initiators from "./pages/initiators/initiators";
import RatingInitiator from "./pages/initiators/rating";
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/initiators" element={<Initiators />}/>
        <Route  path="/ratingInitiator" element={<RatingInitiator />}/>

      </Routes>
    </Router>
  );
}

export default App;
