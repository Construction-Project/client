import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TableRow, TableBody } from '@mui/material';


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

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
const AddProject = () => {
  const [status, setStatus] = useState('');
  const [city, setCity] = useState('');



  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState([]);
  //const [presentPic,setPresentPic] = useState([]);

  //const [picturesArr, setPicturesArr] = useState([]);

  const [subscribe, setSubscribe] = useState(false);
  const [lable, setLable] = useState('');


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
    await axios.post('http://localhost:3600/project', {
      address: 'aaa', city: 'jerusalem', status: 'finish', initiatorId: 1, apartmentBefore: 8, apartmentAfter: 5,
      requestYear: 0, permitYear: 9, populatingYear: 55, description: 'mmm', tama38: 1, pinuyBinuy: 0
      , picturesArr: picture


    }, config)

    //

    //לשלוח 


    if (picture) {
      alert('gfgfg');
      setSubscribe(true);
    }
    setOpen(false);

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

          <TableBody>

            <StyledTableRow>
              <StyledTableCell >{ }</StyledTableCell>
              <StyledTableCell >{ }</StyledTableCell>
              <StyledTableCell >

                
                
               


                <Uploader picture={picture} setPicture={setPicture} label="Add Picture" />
                {/* {picture?.length?picture.map(pic=><>{pic}</>:<>0</>)} */}
                {picture.length?picture.map((pic)=> <>herre {pic}</> ):<></>}
              </StyledTableCell>
              <StyledTableCell ></StyledTableCell>
              <StyledTableCell ></StyledTableCell>
              <StyledTableCell ><Cities /></StyledTableCell>
              <StyledTableCell ><Statuses /></StyledTableCell>
            </StyledTableRow>

          </TableBody>

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