import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"


import Login from "./pages/login";
import Register from "./pages/register";
import InitiatorRegister from "./pages/register/initiator";
import SingleIntiator from "./pages/initiators/Single";
import InitiatorsList from './pages/initiators/List'
import RatingInitiator from "./pages/initiators/List/RatingInitiator";
import Request from "./pages/request";
import Simulator from "./pages/simulator";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Uploader from "./pages/Uploader";
import ChooseTamaAndPinuyBinuy from './pages/register/ChooseTamaAndPinuyBinuy'


import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import Stack from "@mui/material/Stack";


import Checkboxes from './pages/initiators/List/check'
import { AuthContextProvider } from "./context/authContext";
const routes = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/initiatorRegister", component: InitiatorRegister },
  { path: "/initiators", component: InitiatorsList },
  { path: "/initiators/:initiatorId", component: SingleIntiator },
  { path: "/RatingInitiator", component: RatingInitiator },
  { path: "/request", component: Request },
  { path: "/simulator", component: Simulator },
  { path: "/Checkboxes", component: Checkboxes }


];
currPaths = routes

function App() {
  return (
    <>
      {/* {currPaths.map((currPath => <Route path = {currPath.url} element = {currPath.element}></Route>))}
      <AuthContextProvider>
        <Router>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: '#ffffff' }} >
              <Container maxWidth="xl">
                <Toolbar>
                  <Stack direction="row" spacing={5} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                    {
                      // routes.map((currPath) => <Button color="success" component={Link} to={currPath.url}>{currPath.title}</Button>)
                      
                    }
                  </Stack>

                </Toolbar>
              </Container>
            </AppBar>
          </Box> */}
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

            <Route path="/upload" element={<Uploader />}></Route>
            <Route path="/ChooseTamaAndPinuyBinuy" element={<ChooseTamaAndPinuyBinuy />}></Route>
             <Route path="/forbiddenRating"element={<forbiddenRating/>}></Route> 

      {/* </Routes> */}
      {/* </Router> */}
      {/* </AuthContextProvider> */}
      <Routes>
        {currPaths.map((currPath => <Route path={currPath.url} element={currPath.element}></Route>))},
        {/* {url : "/showArticle", title: "showArticle", element: <ShowArticle/>},
                        {url : "/showComments", title: "showComments", element: <ShowComments/>} */}
        <Route path="/upload" element={<Uploader />}></Route>
        <Route path="/ChooseTamaAndPinuyBinuy" element={<ChooseTamaAndPinuyBinuy />}></Route>
        <Route path="/forbiddenRating"element={<forbiddenRating/>}></Route> 

      </Routes>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#ffffff' }} >
          <Container maxWidth="xl">
            <Toolbar>
              <Stack direction="row" spacing={5} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                {
                  currPaths.map((currPath) => <Button color="success" component={Link} to={currPath.url}>{currPath.title}</Button>)
                }
              </Stack>

            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
export default App;



//key={route.path} ---למה ? ? ?



//http://192.168.101.29:3000/login