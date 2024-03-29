//https://freefrontend.com/css-code-examples/#sitemap-layouts
//https://codepen.io/andreacrawford/pen/NvqJXW
import { useState ,useContext} from "react";
import { Link ,useNavigate} from "react-router-dom"
import { Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../context/authContext' 

import { useFormik, FormikValues } from "formik";
import {Alert, Button ,TextField,AlertTitle,Box, Typography} from '@mui/material';
import * as yup from 'yup';

//var validator = require("email-validator");


const Login = () => {
     const navigate=useNavigate();
      const {login} =  useContext(AuthContext)



     const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('כתובת אימייל לא תקינה')
          .required('שדה חובה'),
        password: yup
          .string('Enter your password')
          .required('שדה חובה'),
      });




    const [err, setErr] = useState(null);

    const { handleSubmit ,handleChange ,values ,getFieldProps ,errors,touched} = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema:validationSchema,

         onSubmit: async(values)=>{
          //  const {data:_initiators} = await axios.put(`http://localhost:3600/initiator/${20}`,{address:values.address,name:values.name,hp:'1223',tama38:1,pinuyBinuy:1})
       // console.log('in submit');
          try{
          await login({ userName:values.email,password:values.password});
          navigate('/initiators')
        }
        catch(err){
            console.log(err.response);
            setErr(err.response)
          } 
        }
        }
        );
    return (
        <>
    


        <form onSubmit={handleSubmit} style={{paddingTop:"60px"}}>
    <Box sx={{ display: 'flex'}} justifyContent={'center'} alignItems={'center'}
     flexDirection={'column'} spacing={'70px'} >

        <Typography textAlign={'center'}>login</Typography>
         <TextField 
          
         value={values.email} 
         id="outlined-basic" 
         label=" *מייל"
         variant="outlined" 
          {...getFieldProps("email")} 
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}

          />


  <TextField
         value={values.password} 
         id="outlined-basic" 
         type="password"
         label=" סיסמה"
         variant="outlined" 
          {...getFieldProps("password")} 
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}

          
          />
{err?.status==401 && <Alert severity="error"><AlertTitle>
        שם משתמש או סיסמה שגויים </AlertTitle></Alert>}
            <Button type="submit">לחץ לכניסה</Button> </Box>
            </form>
            <Link to="/register">אתה לא רשום? לחץ כאן</Link>
           
        </>
    )
}

export default Login

