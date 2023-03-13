import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,TableRow,TableBody} from '@mui/material';


import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useState } from 'react';
import Statuses from '../../status';
import Cities from '../../City'
import StyledTableCell from './styleTable/StyledTableCell';
import StyledTableRow from './styleTable/StyledTableRow';
import Uploader from '../../../Uploader';
import FormattedInputs from './numericButton';

const AddProject = () => {
    const [open, setOpen] = useState(false);
    const[picture,setPicture]=useState('');
  const [subscribe,setSubscribe]=useState(false);
  const[lable , setLable]=useState('');
  const handleLable=(l)=>{
    setLable(l)
  }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handlSubscribe = () =>{
        alert('su');

        if(picture){
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
          <StyledTableCell >{}</StyledTableCell>
          <StyledTableCell >{}</StyledTableCell>
          <StyledTableCell >
                <Uploader file={picture} setFile={setPicture} label="Add Picture" subscribe={subscribe}/>
</StyledTableCell>
          <StyledTableCell ></StyledTableCell>
          <StyledTableCell ></StyledTableCell>
          <StyledTableCell ><Cities/></StyledTableCell>
          <StyledTableCell ><Statuses/></StyledTableCell>         
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
              <Button  onClick={handlSubscribe}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    
  



export default AddProject;