import { useFormik, FormikValues } from "formik";
import {Button ,TextField} from '@mui/material';
import axios from "axios";


const SingleIntiatorForm = ({ setIsEditing }) => {

     
    const config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }
   
    const { handleSubmit ,handleChange ,values ,getFieldProps} = useFormik({
        initialValues: {
            address:'some address',
            name:'some name'
        },

         onSubmit: async(values)=>{
            const {data:_initiators} = await axios.put(`http://localhost:3600/initiator/${20}`,{address:values.address,name:values.name,hp:'1223',tama38:1,pinuyBinuy:1},config)
        }

        });

    return <>
        in form
        <form onSubmit={handleSubmit}>

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
        <Button  type="submit" variant="outlined">שמירה</Button>
        <Button  variant="outlined" onClick={() => setIsEditing(false)}>ביטול</Button>

        
        </form>
    </>
    {/* <Button variant="outlined">עריכה</Button> */ }
}
export default SingleIntiatorForm; 


//onClick={() => setIsEditing(false)}s