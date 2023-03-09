import Login from "./pages/login/login";
import Register from "./pages/register";
import InitiatorRegister from "./pages/register/initiator";

//<Route  path="/register" element={<Register />}/>
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Initiators from "./pages/initiators/List";
// import RatingInitiator from "./pages/initiators/List/rating";
import ProjectsList from "./pages/initiators/Single/projects/projects";
import { useParams } from "react-router-dom";
// import SingleIntiatorCard from "./pages/initiators/Single/Card";
// import SingleIntiatorForm from "./pages/initiators/Single/Form";
import SingleIntiator from "./pages/initiators/Single";
import InitiatorsList from './pages/initiators/List'

const routes=[{path:"/register", component:Register}]

function App() {
  const {initiatorId}=useParams();

  return (
    <Router>
      <Routes>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/initiatorRegister" element={<InitiatorRegister />}/>
        <Route  path="/initiators" element={<InitiatorsList />}>
          {/*  */}
        </Route>
        <Route  path="initiators/:initiatorId" element={<SingleIntiator initiatorId={1}></SingleIntiator>}/>
        {/* <Route  path="/initiators/projects" element={<ProjectsList initiatorId={}/>}/> */}
        {/* <Route  path="/ratingInitiator" element={<RatingInitiator />}/> */}
        {/* <Route  path="initiators/1/projects" element={<ProjectsList initiatorId={1}/>}/> */}
        {/* <Route  path="initiators/1" element={<SingleIntiatorCard initiatorId={1}></SingleIntiatorCard>}/> */}

        {/* <Route  path="/projects" element={<ProjectsList> initiatorId={1}<ProjectsList />}/> */}
        {/* <Route path="initiators/:initiatorId/form" element={<SingleIntiatorForm initiatorId={1}></SingleIntiatorForm>}></Route> */}

      </Routes>
    </Router>
  );
}
export default App;
