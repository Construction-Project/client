import { useState } from "react";
import {Button,TextField,Box,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Rating,Stack} from '@mui/material';
import { useFormik, FormikValues } from "formik";
import axios from "axios";

const RatingInitiator = ({initiatorId}) => {

  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [opinion, setOpinion] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setStars(0);
    setOpen(false);
  };

  const handleSubscribe = async() => {

    const config = {

      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }
//////////////////////////////////////////
    try{
   const {data} = await axios.post(`http://localhost:3600/opinion`, {stars:stars,opinion:opinion, opinionInitiator:initiatorId,opinionUser:4},config)
  
}
catch(err){
  console.log("Axios error: ", err.response.data.message);
  if(err.response.data.message=='you cant give an opinion twice'){
    alert('you cant give an opinion twice to the same initiator')
  }
}
handleClose();
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        לדרוג
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>דרוג</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <Rating onChange={(event,newValue)=>{setStars(newValue)}} value={stars} name="half-rating" defaultValue={2.5} precision={0.5} />           
          </Stack>
          <DialogContentText>
            הייתה מרוצה?
            ספר לנו על זה!
            הכנס חוות דעת
          </DialogContentText>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          value={opinion}
          onChange={(e)=>{
            setOpinion(e.target.value)
          }}
        />
      </div>
      <div>
      </div>
      <div>
      </div>
    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={handleSubscribe}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default RatingInitiator