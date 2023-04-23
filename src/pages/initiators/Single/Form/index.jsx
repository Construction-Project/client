import { useContext } from 'react'
import { useFormik, FormikValues} from "formik";
import {Button ,TextField} from '@mui/material';
import axios from "axios";

import { AuthContext } from '../../../../context/authContext'


const SingleIntiatorForm = ({ setIsEditing }) => {

    const {token,currentUser} = useContext(AuthContext);

    const config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }
   
    const { handleSubmit ,handleChange ,values ,getFieldProps} = useFormik({
        initialValues: {
            address:'some address',
            name:'some name',
            hp:0,
            company_name:""
        },

         onSubmit: async(values)=>{
            const {data:_initiators} = await axios.put(`http://localhost:3600/initiator/${currentUser.id}`,{address:values.address,name:values.name,hp:'1223',tama38:1,pinuyBinuy:1},config)
        }

        });

    return <>
        in form
        <form onSubmit={handleSubmit}  style={{paddingTop:"60px"}}>

        <TextField 
         value={values.name} 
         id="outlined-basic" 
         label="שם"
         variant="outlined" 
          {...getFieldProps("name")} 
          onChange={handleChange}/>



        <TextField
          value={values.address} 
          id="outlined-basic" 
          label="כתובת"
           variant="outlined" 
            {...getFieldProps("address")} 
            onChange={handleChange}/>
        {/* <TextField label="Address" fullWidth {...getFieldProps("address")} /> */}

        <TextField 
         value={values.hp} 
         id="outlined-basic" 
         label="ח.פ."
         variant="outlined" 
          {...getFieldProps("hp")} 
          onChange={handleChange}/>

<TextField 
         value={values.company_name} 
         id="outlined-basic" 
         label="שם חברה"
         variant="outlined" 
          {...getFieldProps("company_name")} 
          onChange={handleChange}/>



        <Button  type="submit" variant="outlined">שמירה</Button>
        <Button  variant="outlined" onClick={() => setIsEditing(false)}>ביטול</Button>

        
        </form>
    </>
    {/* <Button variant="outlined">עריכה</Button> */ }
}
export default SingleIntiatorForm; 


//onClick={() => setIsEditing(false)}s