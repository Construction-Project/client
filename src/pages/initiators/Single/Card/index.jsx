import ProjectsList from "../projects/projects";
import { Button, Grid, Typography, Box } from '@mui/material';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import AddProject from "../projects/AddProject";
import { useEffect, useState, useContext } from "react";
import axios from 'axios'
import { AuthContext } from '../../../../context/authContext'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const SingleIntiatorCard = ({ setIsEditing }) => {
  const navigate = useNavigate();

  const [initiator, setInitiator] = useState({})

  const { initiatorId } = useParams();

  const { currentUser } = useContext(AuthContext);


  //לא ידעתי איך מעבירים כפרמטר את initiator 
  //אז פשוט עשיתי עוד fetch לפי id
  //יכול להיות שזה נכון ואז לא להחזיר את כל הפרטים מבחוץ - 
  //בקיצור - להכרעה... 
  useEffect(() => {
    async function fetchData() {

      const { data: _initiator } = await axios.get(`http://localhost:3600/initiator/${initiatorId}`)
      if (_initiator) setInitiator(_initiator)

    }
    fetchData()
  }, []);

  return <>
    <Grid container spacing={3} justifyContent='center' style={{textAlign: "center"}}>
      <Grid item xs={12} container justifyContent='center' spacing={6}>
        <Grid item >
          <Typography variant="h2">{initiator.company_name}</Typography></Grid><Grid item >
          <img style={{ width: "50px" }} src={`http://localhost:3600/images/${initiator.logo}`} />
          </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">{initiator.address}</Typography>
      </Grid>
      <Grid item xs={12} justifyContent='center'>
        <Typography variant="h5" color="text.secondary">{initiator.tama38 ? "Tama 38" : ""} {bull} {initiator.pinuyBinuy ? "PinuyBinuy" : ""}</Typography>
      </Grid><Grid item>
        <Typography variant="h3">{initiator.description}</Typography>
      </Grid>{/* <img src=`${initiator.logo}`>{}</img> */}

      <Grid item><Typography variant="h3">{initiator.phone}</Typography></Grid>
      <Grid item><Typography variant="h3">{initiator.name || "RIKI"}</Typography></Grid>
    </Grid>

    <ProjectsList />


    {currentUser?.role == 'initiator' && currentUser?.id == initiatorId &&
      <>
        <Button variant="outlined" onClick={() => setIsEditing(true)}>עריכה</Button>
        <AddProject />
      </>}
  </>

}
export default SingleIntiatorCard;


