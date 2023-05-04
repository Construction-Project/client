
import {AppBar,Toolbar,Container} from '@material-ui/core';
import { AuthContext } from "./context/authContext";
import {  useContext } from "react";
import Button from '@mui/material/Button';


const Nav = () => {
    const {currentUser, logout}=useContext(AuthContext);
  return (

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
      {currentUser&&<Button onClick={()=>logout()} color="inherit">
        logout
      </Button>}

      {currentUser&&<>{`hi ${currentUser.name}`}</>}
      </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav