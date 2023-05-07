import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import { useFormik, FormikValues } from "formik";
import {Card, Grid, Button, TextField, Typography } from '@mui/material';
import axios from "axios";
import { AuthContext } from '../../../../context/authContext'
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import DialogActions from '@mui/material/DialogActions';
import CitySelect from './CitySelect'
import StatusSelect from './StatusSelect';
//address, city, status, apartmentBefore, apartmentAfter, requestYear, permitYear, startConstructionYear, populatingYear, description
const UpdateProject = () => {
  const { projectId, initiatorId } = useParams();
  const navigate = useNavigate();


  // const theme = useTheme();
  const { token, currentUser } = useContext(AuthContext);
  const [project, setProject] = useState({ address: '', city: '', status: '', apartmentBefore: '', apartmentAfter: '', requestYear: '', permitYear: '', startConstructionYear: '', populatingYear: '', description: '' });
  const [city, setCity] = useState('');
  const [statusChecked, setStatusChecked] = useState('');


  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const [open, setOpen] = useState(false);
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };

  useEffect(() => {
    async function fetchData() {

      const { data: _project } = await axios.get(`http://localhost:3600/project/${projectId}`)
      console.log("project", { _project })
      console.log(_project)

      if (_project) {
        setProject(_project)
        setStatusChecked(_project.status)
        setCity(_project.city)
      }

    }
    fetchData()
  }, []);


  // const handleClickOpen = () => {
  //     setOpen(true);
  // };
  // const handleClose = () => {
  //     setOpen(false);
  // };

  const { setFieldValue, handleSubmit, handleChange, values, getFieldProps, handleSubscribe } = useFormik({// async () => {
    enableReinitialize: true,
    initialValues: { ...project },
    //validationSchema:validationSchema,
    onSubmit: async (values) => {
      console.log(values.address)

      console.log({ city })
      console.log({ statusChecked })

      const { data: _initiators } = await axios.put(`http://localhost:3600/project/${projectId}`, { address: values.address, city: city, status: statusChecked, initiatorId: currentUser.id, apartmentBefore: values.apartmentBefore, apartmentAfter: values.apartmentAfter, requestYear: values.requestYear, permitYear: values.permitYear, populatingYear: values.populatingYear, description: values.description }, config)

      // handleClose();
    }

  }
  );



  return (
<Card style={{margin:'35%',width:'30%',padding:'2%',marginTop:'5%'}}>
  <Typography style={{direction:'rtl'}}>עדכון פרטים</Typography>   
  <br/> <Grid container spacing={3}  >
      {/* // <Dialog fullScreen={fullScreen} > */}
      <Grid item xs={6}>
        <TextField
          value={values.address}//{values.address}
          id="outlined-basic"
          label="כתובת"
          variant="outlined"
          {...getFieldProps("address")}
        /></Grid>
      <Grid item xs={6}>
        {city}
        <CitySelect city={city} setCity={setCity}
        /></Grid>

      <Grid item xs={6}>
        {statusChecked}
        <StatusSelect statusChecked={statusChecked} setStatusChecked={setStatusChecked} ></StatusSelect> </Grid>


      {/* 
            <TextField
                value={values.city}
                id="outlined-basic"
                label="עיר"
                variant="outlined"
                {...getFieldProps("city")}
                
            /> */}
      {/* <TextField
                value={values.status}
                id="outlined-basic"
                label="סטטוס"
                variant="outlined"
                {...getFieldProps("status")}
            /> */}
      <Grid item xs={6}>

        <TextField
          value={values.apartmentBefore}
          id="outlined-basic"
          label="מס' דירות לפני"
          variant="outlined"
          {...getFieldProps("apartmentBefore")}
          onChange={(e) => {
            setFieldValue(
              "apartmentBefore",
              parseInt(e.target.value) || ''
            );
          }}
        /></Grid>
      <Grid item xs={6}>

        <TextField
          value={values.apartmentAfter}
          id="outlined-basic"
          label="מס' דירות אחרי"
          variant="outlined"
          {...getFieldProps("apartmentAfter")}
          onChange={(e) => {
            setFieldValue(
              "apartmentAfter",
              parseInt(e.target.value) || (values.apartmentAfter)
            );
          }}
        /></Grid>
      <Grid item xs={6}>

        <TextField
          value={values.requestYear}
          id="outlined-basic"
          label="שנת בקשה"
          variant="outlined"
          {...getFieldProps("requestYear")}
          onChange={(e) => {
            setFieldValue(
              "requestYear",
              parseInt(e.target.value) || ''
            );
          }}
        /></Grid><Grid item xs={6}>


        <TextField
          value={values.permitYear}
          id="outlined-basic"
          label="שנת אישור"
          variant="outlined"
          {...getFieldProps("permitYear")}
          onChange={(e) => {
            setFieldValue(
              "permitYear",
              parseInt(e.target.value) || ''
            );
          }}

        /></Grid><Grid item xs={6}>


        <TextField
          value={values.startConstructionYear}
          id="outlined-basic"
          label="שנת תחילת הבניה"
          variant="outlined"
          {...getFieldProps("startConstructionYear")}
          onChange={(e) => {
            setFieldValue(
              "startConstructionYear",
              parseInt(e.target.value) || ''
            );
          }}
        /></Grid><Grid item xs={6}>

        <TextField
          value={values.populatingYear}
          id="outlined-basic"
          label="שנת איכלוס"
          variant="outlined"
          {...getFieldProps("populatingYear")}
          onChange={(e) => {
            setFieldValue(
              "populatingYear",
              parseInt(e.target.value) || ''
            );
          }}
        /></Grid><Grid item xs={6}>

        <TextField
          value={values.description}
          id="outlined-basic"
          label="תאור"
          variant="outlined"
          {...getFieldProps("description")}
        />
      </Grid>

      {/* <DialogActions> */}
      <Button autoFocus onClick={() => navigate(`/initiators/${initiatorId}`)}>
        ביטול
      </Button>
      <Button autoFocus onClick={() => handleSubmit()}>
        עידכון
      </Button>

      {/* </DialogActions> */}


      {/* </Dialog> */}
    </Grid></Card>
  );
}


export default UpdateProject