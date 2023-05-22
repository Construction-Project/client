import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom"
import axios from "axios";
import { useFormik, FormikValues } from "formik";
import { Button, TextField } from '@mui/material';
import * as yup from 'yup';
import { Box } from "@mui/system";
//var validator = require("email-validator");

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('כתובת אימייל לא תקינה')
      .required('שדה חובה'),
    password: yup
      .string('Enter your password')
      .required('שדה חובה'),
  });

  const { handleSubmit, handleChange, values, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log('here')
      try {
        await axios.post("http://localhost:3600/auth/register", { userName: values.email, password: values.password, name: values.name })
        navigate("/login")
      }
      catch (err) {
        console.log(err.response.data?.message)
      }
    }
  })
  // const registerToServer = async (email,password,name) => {
  //   if(!validator.validate(email)){
  //       alert('email is not valid')
  //       return
  //   }

  //   alert('valid')
  //   try{
  //     await axios.post("http://localhost:3600/auth/register",{ userName:email,password:password,name:name})
  //     navigate("/login")
  //   }
  //   catch(err){
  //     setErr(err.response.data?.message)
  //   }  
  //   }
  return (
    <>
    
     
        <form onSubmit={handleSubmit} style={{ paddingTop: "60px" }}>
          <h2>register</h2>


          <TextField

            value={values.email}
            id="outlined-basic"
            label="אימייל"
            variant="outlined"
            {...getFieldProps("email")}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}

          />

          <br></br>
          <br></br>
          <TextField
            value={values.password}
            id="outlined-basic"
            label="סיסמא"
            type="password"
            variant="outlined"
            {...getFieldProps("password")}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}

          />
          <br></br>
          <br></br>
          <TextField
            value={values.name}
            id="outlined-basic"
            label="שם"
            variant="outlined"
            {...getFieldProps("name")}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}

          />
          <br></br>
          <br></br>
          <Button type="submit" variant="outlined">לחץ כדי להירשם</Button>

        </form>


        <Link to="/initiatorRegister">רוצה להירשם כיזם? לחץ כאן</Link><div />
        
    </>

  )
}

export default Register;