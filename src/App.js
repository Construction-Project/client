import Login from "./pages/login/login";
import Register from "./pages/register/register";
import InitiatorRegister from "./pages/register/initiatorRegister";

//<Route  path="/register" element={<Register />}/>
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Initiators from "./pages/initiators/initiators";
import RatingInitiator from "./pages/initiators/rating";
import ProjectsList from "./pages/initiators/projects/projects";
function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/initiatorRegister" element={<InitiatorRegister />}/>
        <Route  path="/initiators" element={<Initiators />}/>
        {/* <Route  path="/initiators/projects" element={<ProjectsList initiatorId={}/>}/> */}
        <Route  path="/ratingInitiator" element={<RatingInitiator />}/>
      </Routes>
    </Router>
  );
}
export default App;
