import { FormControl, InputLabel, Select, MenuItem, Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TableRow, TableBody, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState, useContext } from 'react';
import Statuses from '../../status';
import Cities from '../../City'
import StyledTableCell from './styleTable/StyledTableCell';
import StyledTableRow from './styleTable/StyledTableRow';
import Uploader from '../../../Uploader';
import FormattedInputs from './numericButton';
import axios from 'axios';
import { AuthContext } from '../../../../context/authContext'

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ClearIcon from '@mui/icons-material/Clear';
import CitySelect from './CitySelect';
import StatusSelect from './StatusSelect';
import { useFormik, FormikValues } from "formik";
import { Chip } from "@material-ui/core";


const AddProject = () => {
  const { token, currentUser } = useContext(AuthContext);

  const [status, setStatus] = useState();
  const [city, setCity] = useState();
  const [project, setProject] = useState({ address: '', city: '', status: '', apartmentBefore: '', apartmentAfter: '', requestYear: '', permitYear: '', startConstructionYear: '', populatingYear: '', description: '' });

  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState([]);
  const [subscribe, setSubscribe] = useState(false);
  const [lable, setLable] = useState('');

  const [projectType, setProjectType] = useState('');

  const handleLable = (l) => {
    setLable(l)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPicture([]);
  };

  const handlSubscribe = async () => {


  }

  const handleRemovingImage = (picToRemove) => {
    const arr = picture.filter(pic => picToRemove != pic)
    console.log(arr)

    setPicture(arr)
  }


  const { setFieldValue, handleSubmit, handleChange, values, getFieldProps, handleSubscribe } = useFormik({// async () => {
    enableReinitialize: true,
    initialValues: { ...project },
    //validationSchema:validationSchema,
    onSubmit: async (values) => {

      const config = {

        headers: {
          'Authorization': 'Bearer ' + token
        }
      }


      console.log('handlSubscribe');
      console.log(picture);

      try {
        await axios.post('http://localhost:3600/project', {
          address: values.address, city: values.city, status: values.status, initiatorId: currentUser.id, apartmentBefore: values.apartmentBefore, apartmentAfter: values.apartmentAfter,
          requestYear: values.requestYear, permitYear: values.permitYear, populatingYear: values.populatingYear, description: values.description, tama38: projectType === 'tama38', pinuyBinuy:
            projectType === 'pinuyBinuy', picturesArr: picture
        }, config)
       

      }
      catch (error) {
        console.log(error)
      }
      handleClose();
      if (picture) {
        setSubscribe(true);
      }
      setOpen(false);
    }

  }
  );

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        הכנס פרויקט חדש
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>

          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              רוצה להציג פרויקט חדש?
              הכנס את הפרטים הבאים ושלח לנו
            </DialogContentText>

            <TableBody>

              <StyledTableRow>

                <StatusSelect getFieldProps={getFieldProps}/>


                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">סוג פרויקט</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={projectType}
                    label="סוג פרויקט"
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <MenuItem value={"tama38"}>תמ"א 38</MenuItem>
                    <MenuItem value={"pinuyBinuy"}>פינוי בינוי</MenuItem>
                  </Select>
                </FormControl>
                <Grid item xs={6}>
                  <TextField
                    value={values.address}//{values.address}
                    id="outlined-basic"
                    label="כתובת"
                    variant="outlined"
                    {...getFieldProps("address")}
                  /></Grid>
                <Grid item xs={6}>
                  <CitySelect getFieldProps={getFieldProps}
                  /></Grid>

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
                {picture.length ? <Uploader picture={picture} setPicture={setPicture} label="הוסף תמונה" /> :
                  <Uploader picture={picture} setPicture={setPicture} />}

                {/* <Uploader picture={picture} setPicture={setPicture} label="Add Picture" /> */}
                {/* {picture?.length?picture.map(pic=><>{pic}</>:<>0</>)} */}
                {picture.length ? picture.map((pic) =>
                  // <> {pic.name}

                  // <IconButton onClick={()=>handleRemovingImage(pic)}>
                  //       <CloseIcon />
                  // </IconButton> </>
                  <Chip
                    label={pic.name}
                    variant="outlined"
                    onDelete={() => handleRemovingImage(pic)}
                  />
                )
                  : <></>}
              </StyledTableRow>
            </TableBody>
            {/* <FormattedInputs lable={"mali"}></FormattedInputs> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
          <Button type="submit">Subscribe</Button>
        </form>

      </Dialog>

    </div>
  );
}

export default AddProject;
