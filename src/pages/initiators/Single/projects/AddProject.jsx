import axios from 'axios';
import CitySelect from './CitySelect';
import StatusSelect from './StatusSelect';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Chip, Card, Grid, Button, TextField, Typography } from '@mui/material';

import { useState ,useEffect} from 'react';
const AddProject = () => {
  const [open, setOpen] = useState(false);
  const [city, setCity]=useState([]);
  const [status,setStatus]=useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    async function fetchData() {
      var { data: _status } = await axios.get(`http://localhost:3600/status`)
      if (_status) setStatus(_status)
      var { data: _city } = await axios.get(`http://localhost:3600/city`)
      if (_city) setCity(_city)
      console.log({ _city })
    }
    fetchData()
  }, []);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        הכנס פרויקט חדש
      </Button>
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
          <Button>ghfgjftg</Button>
          {/* <Grid item xs={6}>
        {city}
        <CitySelect city={city} setCity={setCity}
        /></Grid>

      <Grid item xs={6}>
        {status}
        <StatusSelect statusChecked={status} setStatusChecked={setStatus} ></StatusSelect> </Grid> */}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default AddProject