import axios from 'axios';
import CitySelect from './CitySelect';
import StatusSelect from './StatusSelect';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useFormik } from 'formik';

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

  const { handleSubmit, handleChange, values, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      address: '', city: 0, status: 0, initiatorId: 0, apartmentBefore: 0, apartmentAfter: 0,
      requestYear: 0, permitYear: 0, populatingYear: 0, description: '', tama38: 0, pinuyBinuy: 0, picturesArr: []

    },

    onSubmit: async (values) => {
      try {
        console.log(`here in register initiator`)
        console.log({ values });
        await axios.post("http://localhost:3600/project", {
          address: values.address, city: values.city, status: values.status, initiatorId: values.initiatorId, apartmentBefore: values.apartmentBefore, apartmentAfter: values.apartmentAfter,
          requestYear: values.requestYear, permitYear: values.permitYear, populatingYear: values.populatingYear, description: values.description, tama38: values.tama38, pinuyBinuy: values.pinuyBinuy, picturesArr: values.picturesArr
        })
      }
      catch (err) {
        console.log({ err })
        console.log(err.response.data?.message)
      }
    }
  })
















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
          <CitySelect city={city} setCity={setCity}/>
          {/* <StatusSelect statusChecked={status}setStatusChecked={setStatus}></StatusSelect> */}
          {/* <StatusSelect statusChecked={status} setStatusChecked={setStatus} ></StatusSelect> */}
        
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