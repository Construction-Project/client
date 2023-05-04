
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core';
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import Button from '@mui/material/Button';
import { Grid } from '@material-ui/core';


const Nav = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <AppBar position="fixed" color='primary'>
<Container sx={{height: "500px"}}>
  <Toolbar>
        <Grid sx={{ display: "flex-end", width: '100%' }} container justifyContent='space-between'>
        <Grid item justifyContent='flex-end'>
            {currentUser && <Button onClick={() => logout()} color="inherit">
              logout
            </Button>}
            {currentUser && <Typography>{`hi ${currentUser.name}`}</Typography>}
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
        </Toolbar>
</Container>
    </AppBar>
  )
}

export default Nav