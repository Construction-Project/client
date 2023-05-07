
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core';
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import Button from '@mui/material/Button';
import { Grid } from '@material-ui/core';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import React from 'react';
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Box from '@mui/material/Box';



const Nav = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    window.open("http://localhost:3000/login").focus();
  }

  const handleRegister = () => {
    window.open("http://localhost:3000/register").focus();
  }
  return (
    <AppBar position="fixed" color='primary'>
      <Container sx={{ height: "500px" }}>
        <Toolbar>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ fontSize: 40, marginTop: "8px" }}
              >
                <AccountCircle />
              </IconButton>
              {currentUser && <Typography>{`hi ${currentUser.name}`}</Typography>}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: 10,
                  horizontal: 10
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {!currentUser && <MenuItem onClick={handleLogin}>sign in</MenuItem>}
                {!currentUser && <MenuItem onClick={handleRegister}>sign up</MenuItem>}
                {currentUser && <MenuItem onClick={logout}>logout</MenuItem>}
              </Menu>

              {/* {currentUser && <Button onClick={() => logout()} color="inherit">
              logout
            </Button>} */}
              
              <Button style={{ width: "10vw" }} href="/simulator" color="inherit">
                סימולטור
                <TroubleshootIcon></TroubleshootIcon>
              </Button>
              <Button style={{ width: "10vw" }}
                href="/request" color="inherit">
                שליחת פניה ליזם
                <ForwardToInboxIcon></ForwardToInboxIcon>
              </Button>
              <Button style={{ width: "10vw" }} href="/initiators" color="inherit">
                יזמים
                <ApartmentIcon></ApartmentIcon>
              </Button>
              <Button style={{ width: "10vw" }} href="/register" color="inherit">
                הרשמה
                <ExitToAppIcon></ExitToAppIcon>
              </Button>
              <Button style={{ width: "10vw" }} href="/login" color="inherit">
                כניסה
                <LoginIcon></LoginIcon>
              </Button>
              <Button style={{ width: "10vw" }} href="/" color="inherit">
                דף הבית
                <HomeIcon></HomeIcon>
              </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav