import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TableRow, TableBody, IconButton } from '@mui/material';


import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from 'react';
import Statuses from '../../status';
import Cities from '../../City'
import StyledTableCell from './styleTable/StyledTableCell';
import StyledTableRow from './styleTable/StyledTableRow';
import Uploader from '../../../Uploader';
import FormattedInputs from './numericButton';
import axios from 'axios';
import { useFormik } from 'formik';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ClearIcon from '@mui/icons-material/Clear';
const AddProject = () => {
  const [status, setStatus] = useState([]);
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState([]);
  const [subscribe, setSubscribe] = useState(false);
  const [lable, setLable] = useState('');

   useEffect( () => {
    async function fetchData() {

         var {data:_status} = await axios.get(`http://localhost:3600/status`)
         _status=_status.map(status=>status.status)
        console.log({_status})

        if(_status) setStatus(_status)   }

    fetchData()

   }, []);

  // useEffect(() => {
  //   //setPicturesArr(picture?[...picturesArr,picture]:[])
  //   //
  //   console.log('in')
  //   console.log({picture})
  //   if(picturesArr.length<1)
  //     setPicturesArr([picture])
  //   else
  //   setPicturesArr([...picturesArr,picture])
  //   console.log(picturesArr,"picturesArr")

  // }, [picture]);
  const handleLable = (l) => {
    setLable(l)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPicture([]);
    //setPicturesArr([]);
  };

  const handlSubscribe = async () => {
    const config = {

      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }


    console.log('handlSubscribe');
    console.log(picture);

    try{
    await axios.post('http://localhost:3600/project', {
      address: 'aaa', city: 'jerusalem', status: 'finish', initiatorId: 2, apartmentBefore: 8, apartmentAfter: 5,
      requestYear: 0, permitYear: 9, populatingYear: 55, description: 'mmm', tama38: 1, pinuyBinuy: 1
      , picturesArr: picture


    }, config)

    //

    //לשלוח 

  }
  catch(error){
    console.log(error)
  }
    if (picture) {
      alert('gfgfg');
      setSubscribe(true);
    }
    setOpen(false);

  }

const handleRemovingImage=(picToRemove)=>{
  const arr=picture.filter(pic=>picToRemove!=pic)
  console.log(arr)

  setPicture(arr)
}


return (

  <div>
    <Button variant="outlined" onClick={handleClickOpen}>
      הכנס פרויקט חדש
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
                value={"ci"}
                id="outlined-basic"
                label="עיר"
                variant="outlined"
               // {...getFieldProps("city")}
            />
        <InputLabel id="demo-select-small-label">סטטוס</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={""}
          label="status"
       //   {...getFieldProps("status")}
        >
          <MenuItem value="">
            <em>בחר סטטוס</em>
          </MenuItem>
          
          {status?.map((status,index)=><MenuItem value={index}>{status}</MenuItem>)}
          {/* <MenuItem value={1}>{status[0]}</MenuItem> */}
          {/* <MenuItem value={1}>{status?.length? status[0]:''}</MenuItem>
          <MenuItem value={2}>{status?.length? status[1]:''}</MenuItem>

    */}
        </Select>
        <Uploader picture={picture} setPicture={setPicture} label="Add Picture" />
          {picture.length ? picture.map((pic) =>
            <> {pic}
              <IconButton onClick={() => handleRemovingImage(pic)}>
                <CloseIcon />
              </IconButton>
            </>)
            : <></>}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <FormattedInputs lable={"mali"}></FormattedInputs>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handlSubscribe}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  </div>
);
}
export default AddProject;