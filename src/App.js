import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"


import Login from "./pages/login";
import Register from "./pages/register";
import InitiatorRegister from "./pages/register/initiator";
import SingleIntiator from "./pages/initiators/Single";
import InitiatorsList from './pages/initiators/List'
import RatingInitiator from "./pages/initiators/List/RatingInitiator";
import Request from "./pages/request";
import Simulator from "./pages/simulator";

import Button from '@mui/material/Button';
import Uploader from "./pages/Uploader";
import ChooseTamaAndPinuyBinuy from './pages/register/ChooseTamaAndPinuyBinuy'


import Checkboxes from './pages/initiators/List/check'
import { AuthContextProvider } from "./context/authContext";
const routes = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/initiatorRegister", component: InitiatorRegister },
  { path: "/initiators", component: InitiatorsList },
  { path: "/initiators/:initiatorId", component: SingleIntiator },
  { path: "/RatingInitiator", component: RatingInitiator },
  { path: "/request", component:Request  },
  { path: "/simulator", component:Simulator  },
  { path: "/Checkboxes", component:Checkboxes  }

  
];
function App() {
  return (
    <>
    <AuthContextProvider>
    <Router>
      <nav className='main-nav'>
        <Button href="/" variant="contained">
          דף הבית
        </Button>
        <Button href="/login" variant="contained">
          כניסה
        </Button>
        <Button href="/register" variant="contained">
          הרשמה
        </Button>
        <Button href="/initiators" variant="contained">
          יזמים
        </Button>
        <Button href="/request" variant="contained">
          שליחת פניה ליזם
        </Button>
        <Button href="/simulator" variant="contained">
        סימולטור
        </Button>

      </nav>
      <Routes>
        {routes.map(route => { return <Route key={route.path} path={route.path} element={<route.component />} /> }
        )}

<Route path="/upload" element={<Uploader/>}></Route>
<Route path="/ChooseTamaAndPinuyBinuy" element={<ChooseTamaAndPinuyBinuy/>}></Route>

      </Routes>
    </Router>
    </AuthContextProvider>
    
    </>
  );
}
export default App;



//key={route.path} ---למה ? ? ?



//http://192.168.101.29:3000/login