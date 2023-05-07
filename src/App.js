import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import { useContext } from "react";

import Login from "./pages/login";
import Register from "./pages/register";
import InitiatorRegister from "./pages/register/initiator";
import SingleIntiator from "./pages/initiators/Single";
import InitiatorsList from './pages/initiators/List'
import RatingInitiator from "./pages/initiators/List/RatingInitiator";
import Request from "./pages/request";
import Simulator from "./pages/simulator";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthContext } from "./context/authContext";
import './App.css'

import Button from '@mui/material/Button';
import Uploader from "./pages/Uploader";
import ChooseTamaAndPinuyBinuy from './pages/register/ChooseTamaAndPinuyBinuy'

import React from 'react';
import UpdateProject from "./pages/initiators/Single/projects/updateProject";

import Checkboxes from './pages/initiators/List/check'
import { AuthContextProvider } from "./context/authContext";
import Nav from './Nav'
import { cyan } from "@mui/material/colors";
const routes = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  // { path: "/logout", component: Logout },
  { path: "/initiatorRegister", component: InitiatorRegister },
  { path: "/initiators", component: InitiatorsList },
  { path: "/initiators/:initiatorId", component: SingleIntiator },
  { path: "/RatingInitiator", component: RatingInitiator },
  { path: "/request", component: Request },
  { path: "/simulator", component: Simulator },
  { path: "/Checkboxes", component: Checkboxes },
  { path: "/initiators/:initiatorId/project/:projectId", component: UpdateProject },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#17939F'
    }
  }
})

function App() {

  return (
    <div >
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Router>
            <Nav />
            <Routes>
              {routes.map(route => { return <Route key={route.path} path={route.path} element={<route.component />} /> }
              )}
              <Route path="/upload" element={<Uploader />}></Route>
              <Route path="/ChooseTamaAndPinuyBinuy" element={<ChooseTamaAndPinuyBinuy />}></Route>
              {/* <Route path="/forbiddenRating"element={<forbiddenRating/>}></Route> */}
            </Routes>
          </Router>

         
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;



//key={route.path} ---למה ? ? ?



//http://192.168.101.29:3000/login