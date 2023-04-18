import { useState } from "react";
import { Link } from "react-router-dom";
import {Button,TextField,Box,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Rating,Stack} from '@mui/material';
//import { useFormik, FormikValues } from "formik";
//import axios from "axios";
//import { AuthContext } from '../../../context/authContext' 


const ForbiddenRating = ({}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    

return(
    <>  
     <Button variant="outlined" onClick={handleClickOpen}>
        לדרוג
      </Button>
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>דרוג</DialogTitle>
    <DialogContent>
      {/* <Stack spacing={1}>
        <Rating onChange={(event,newValue)=>{setStars(newValue)}} value={stars} name="half-rating" defaultValue={2.5} precision={0.5} />           
      </Stack> */}
      <DialogContentText>
        כדי לדרג עליך להכנס
      </DialogContentText>
       <Link to="/login">כניסה</Link> 
  <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>

  <div>

  </div>
</Box>
    </DialogContent>
    <DialogActions>
      {/* <Button onClick={handleClose}>ביטול</Button> */}
      {/* <Button onClick={handleSubscribe}>Subscribe</Button> */}
    </DialogActions>
  </Dialog>
  </>
)
}
export default ForbiddenRating