import { Button } from '@mui/material';
import { useFormik, FormikValues } from "formik";
import {TextField} from '@mui/material';
import { Formik } from 'formik';


const SingleIntiatorForm = ({ setIsEditing }) => {

    // const onSubmit = async (FormikValues) => {
    //     // await axios.put(`http://localhost:3600/initiator/${}`)
    // }
    const { values,handleSubmit ,handleChange ,getFieldProps} = useFormik({
        onSubmit:()=>{
            alert('ggg');
            // JSON.stringify(FormikValues)
        },
        initialValues: {address:'some address',name:'some name'},
    });
    return <>
        in form
        <form onSubmit={handleSubmit}>

        <TextField  value={values.name} id="outlined-basic" label="שם" variant="outlined"  {...getFieldProps("name")} onChange={handleChange}/>
        <TextField value={values.address} id="outlined-basic" label="כתובת" variant="outlined"  {...getFieldProps("address")} onChange={handleChange}/>
        {/* <TextField label="Address" fullWidth {...getFieldProps("address")} /> */}
        </form>
        <br></br><br></br>
        <Button type="submit" variant="outlined" onClick={() => setIsEditing(false)}>שמירה</Button>
        <Button  variant="outlined" onClick={() => setIsEditing(false)}>ביטול</Button>
    </>
    {/* <Button variant="outlined">עריכה</Button> */ }
}
export default SingleIntiatorForm; 


//onClick={() => setIsEditing(false)}s