import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"


import Login from "./pages/login";
import Logout from "./pages/logout";
import Register from "./pages/register";
import InitiatorRegister from "./pages/register/initiator";
import SingleIntiator from "./pages/initiators/Single";
import InitiatorsList from './pages/initiators/List'
import RatingInitiator from "./pages/initiators/List/RatingInitiator";
import Request from "./pages/request";
import Simulator from "./pages/simulator";
import { AuthContext } from "./context/authContext";

import Button from '@mui/material/Button';
import Uploader from "./pages/Uploader";
import ChooseTamaAndPinuyBinuy from './pages/register/ChooseTamaAndPinuyBinuy'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@mui/material/Container';


import Checkboxes from './pages/initiators/List/check'
import { AuthContextProvider } from "./context/authContext";
const routes = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
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
     <div>
      
      <AppBar position="fixed" sx={{backgroundColor: '#ffffff' }} >
      <Container maxWidth="xl">
        <Toolbar>
      
        <Button href="/" color="inherit">
          דף הבית
        </Button>
        <Button href="/login" color="inherit">
          כניסה
        </Button>
        <Button href="/register" color="inherit">
          הרשמה
        </Button>
        <Button href="/initiators" color="inherit">
          יזמים
        </Button>
        <Button href="/request" color="inherit">
          שליחת פניה ליזם
        </Button>
        <Button href="/simulator" color="inherit">
        סימולטור
        </Button>
        <Button onClick={<Logout></Logout>} color="inherit">
          logout
        </Button>
        </Toolbar>
        </Container>
      </AppBar>
{/* <h1>ffff</h1>
<iframe id='ifrMap' frameborder= '0'  marginheight= '0' marginwidth= '0' width='450px' height='350px'src= 'https://www.govmap.gov.il/map.html?bb=1&zb=1&in=1&c=218526.54,633151.31&z=8' > </iframe> */}

    </div>
    <AuthContextProvider>
    <Router>
      {/* <nav className='main-nav'>
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

      </nav> */}
      <Routes>
        {routes.map(route => { return <Route key={route.path} path={route.path} element={<route.component />} /> }
        )}

<Route path="/upload" element={<Uploader/>}></Route>
<Route path="/ChooseTamaAndPinuyBinuy" element={<ChooseTamaAndPinuyBinuy/>}></Route>
{/* <Route path="/forbiddenRating"element={<forbiddenRating/>}></Route> */}

      </Routes>
    </Router>
    </AuthContextProvider>
    
    </>
  );
}
export default App;



//key={route.path} ---למה ? ? ?



//http://192.168.101.29:3000/login