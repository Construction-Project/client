// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TableRow, TableBody, IconButton } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import { useEffect, useState } from 'react';
// import Statuses from '../../status';
// import Cities from '../../City'
// import StyledTableCell from './styleTable/StyledTableCell';
// import StyledTableRow from './styleTable/StyledTableRow';
// import Uploader from '../../../Uploader';
// import FormattedInputs from './numericButton';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
// import { Icon } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import CloseIcon from '@mui/icons-material/Close';
// import ClearIcon from '@mui/icons-material/Clear';
// import CitySelect from './CitySelect'
// import StatusSelect from './StatusSelect';
// import { Calendar } from 'primereact/calendar';
// import { Chip, Card, Grid, Button, TextField, Typography } from '@mui/material';
// //import { Chip } from "@material-ui/core";
// const AddProject = () => {
//   // const [status, setStatus] = useState([]);

//   const [statusChecked, setStatusChecked] = useState('');
//   const [statusData, setStatusData] = useState([]);
//   const [cityData, setCityData] = useState([]);
//   const [status, setStatus] = useState([])
//   const [city, setCity] = useState('');
//   const [open, setOpen] = useState(false);
//   const [picture, setPicture] = useState([]);
//   const [subscribe, setSubscribe] = useState(false);
//   const [lable, setLable] = useState('');

//   useEffect(() => {
//     async function fetchData() {
//       var { data: _status } = await axios.get(`http://localhost:3600/status`)
//       if (_status) setStatusData(_status)
//       var { data: _city } = await axios.get(`http://localhost:3600/city`)
//       if (_city) setCityData(_city)
//       console.log({ _status })
//     }
//     fetchData()
//   }, []);
//   const { handleSubmit, handleChange, values, getFieldProps, errors, touched } = useFormik({
//     initialValues: {
//       address: '', city: 0, status: 0, initiatorId: 0, apartmentBefore: 0, apartmentAfter: 0,
//       requestYear: 0, permitYear: 0, populatingYear: 0, description: '', tama38: 0, pinuyBinuy: 0, picturesArr: []

//     },

//     onSubmit: async (values) => {
//       try {
//         console.log(`here in register initiator`)
//         console.log({ values });
//         await axios.post("http://localhost:3600/project", {
//           address: values.address, city: values.city, status: values.status, initiatorId: values.initiatorId, apartmentBefore: values.apartmentBefore, apartmentAfter: values.apartmentAfter,
//           requestYear: values.requestYear, permitYear: values.permitYear, populatingYear: values.populatingYear, description: values.description, tama38: values.tama38, pinuyBinuy: values.pinuyBinuy, picturesArr: values.picturesArr
//         })
//       }
//       catch (err) {
//         console.log({ err })
//         console.log(err.response.data?.message)
//       }
//     }
//   })
//   const handleLable = (l) => {
//     setLable(l)
//   }

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setPicture([]);
//   };

//   // const handlSubscribe = async () => {
//   //   const config = {

//   //     headers: {
//   //       'Authorization': 'Bearer ' + localStorage.getItem("token")
//   //     }
//   //   }
//   //   console.log('handlSubscribe');
//   //   console.log(picture);
//   //   try {
//   //     // const picturesPath = picture.map(pic => pic.path)
//   //     await axios.post('http://localhost:3600/project', {
//   //       address: 'bbb', city: 1, status: statusChecked, initiatorId: 2, apartmentBefore: 8, apartmentAfter: 5,
//   //       requestYear: 0, permitYear: 9, populatingYear: 55, description: 'mmm', tama38: 1, pinuyBinuy: 1
//   //       , picturesArr: picturesPath


//   //     }, config)

//       //

//       //לשלוח 

//   //   }
//   //   catch (error) {
//   //     console.log(error)
//   //   }
//   //   if (picture) {
//   //     setSubscribe(true);
//   //   }
//   //   setOpen(false);

//   // }

//   const handleRemovingImage = (picToRemove) => {
//     const arr = picture.filter(pic => picToRemove != pic)
//     console.log(arr)

//     setPicture(arr)
//   }




//   return (

//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         הכנס פרויקט חדש
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We
//             will send updates occasionally.
//           </DialogContentText>

//           <Grid item xs={6}>
//             {city}
//             <CitySelect city={city} setCity={setCity}
//             /></Grid>

//           <Grid item xs={6}>
//             {statusChecked}
//             <StatusSelect statusChecked={statusChecked} setStatusChecked={setStatusChecked} ></StatusSelect> </Grid>
//           <Uploader picture={picture} setPicture={setPicture} label="הוסף תמונה לפרויקט" />
//           {picture.length ? picture.map((pic) =>
//             <> {pic.name}
//               {/* <IconButton onClick={() => handleRemovingImage(pic)}>
//                 <CloseIcon />
//               </IconButton> */}
//               <Chip
//                 label={picture.name}
//                 variant="outlined"
//                 onDelete={() => handleRemovingImage(picture)}
//               />
//             </>)
//             : <></>}
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//           {/* <Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" /> */}
//           <FormattedInputs lable={"mali"}></FormattedInputs>

//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handlSubscribe}>Subscribe</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
// export default AddProject;