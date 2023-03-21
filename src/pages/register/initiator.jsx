import { useState } from "react";
import { Link , useNavigate} from "react-router-dom"
import axios from "axios";
import { useFormik, FormikValues } from "formik";
import {Button ,TextField} from '@mui/material';
import * as yup from 'yup';
import { Navigate } from "react-router-dom";
import { validateYupSchema } from "formik";
import ChooseTamaAndPinuyBinuy from "./ChooseTamaAndPinuyBinuy";

//var validator = require("email-validator");

const InitiatorRegister = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('כתובת אימייל לא תקינה')
      .required('שדה חובה'),
    password: yup
      .string('Enter your password')
      .required('שדה חובה'),
    hp: yup
    .string('הכנס מספר רישוי')
    .required('שדה חובה')
  });
  const { handleSubmit, handleChange, values, getFieldProps  ,errors,touched} = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      hp:'',
      phone:'',
      address:'',
      pinuyBinuy:true,
      tama38:true,
      description:'',
      companyName:'',

    },
    validationSchema:validationSchema,
   
    onSubmit: async (values) => {
      console.log('here')
      console.log(values.tama38)
      console.log(values.pinuyBinuy)



      try {
        await axios.post("http://localhost:3600/auth/register", { userName:values.email,password:values.password,name:values.name,
        hp:values.hp
        ,phone:values.phone,address:values.address
        ,tama38:values.tama38,pinuyBinuy:values.pinuyBinuy,description:values.description,company_name:values.companyName,
        
        
        role:'initiator' })
        navigate("/login")
      }
       catch (err) {
         console.log(err.response.data?.message)
       }
    }
  })
   
  return (
    <>
    <h2>initiatorRegister</h2>
    
     <form onSubmit={handleSubmit}>
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
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}        
        />
        <br></br>
        <br></br>
        <TextField
        value={values.hp}
        id="outlined-basic"
        label="ח.פ."
        variant="outlined"
        {...getFieldProps("hp")}
        onChange={handleChange} 
        error={touched.hp && Boolean(errors.hp)}
        helperText={touched.hp && errors.hp}      
        />
        <br></br>
        <br></br>
        <TextField
        value={values.phone}
        id="outlined-basic"
        label="פלאפון"
        variant="outlined"
        {...getFieldProps("phone")}
        onChange={handleChange} 
        error={touched.phone && Boolean(errors.phone)}
        helperText={touched.phone && errors.phone}      
        />
        <br></br>
        <br></br>
        <TextField
        value={values.address}
        id="outlined-basic"
        label="כתובת"
        variant="outlined"
        {...getFieldProps("address")}
        onChange={handleChange} 
        error={touched.address && Boolean(errors.address)}
        helperText={touched.address && errors.address}      
        />
        <br></br>
        <br></br>
        <TextField
        value={values.pinuyBinuy}
        id="outlined-basic"
        label="פינוי בינוי"
        variant="outlined"
        {...getFieldProps("pinuyBinuy")}
        onChange={handleChange} 
        error={touched.pinuyBinuy && Boolean(errors.pinuyBinuy)}
        helperText={touched.pinuyBinuy && errors.pinuyBinuy}      
        />
        <br></br>
        <br></br>
        <TextField
        value={values.tama}
        id="outlined-basic"
        label="תמא 38"
        variant="outlined"
        {...getFieldProps("address")}
        onChange={handleChange} 
        error={touched.tama && Boolean(errors.tama)}
        helperText={touched.tama && errors.tama}      
        />
        <br></br>
        <br></br>
        <TextField
        value={values.description}
        id="outlined-basic"
        label="תאור"
        variant="outlined"
        {...getFieldProps("description")}
        onChange={handleChange} 
        error={touched.description && Boolean(errors.description)}
        helperText={touched.description && errors.description}      
        />
        <br></br>
        <br></br>
        <TextField
        value={values.companyName}
        id="outlined-basic"
        label="שם החברה"
        variant="outlined"
        {...getFieldProps("description")}
        onChange={handleChange} 
        error={touched.companyName && Boolean(errors.companyName)}
        helperText={touched.companyName && errors.companyName}      
        />
        <br></br>
        <br></br>
        {/* <ChooseTamaAndPinuyBinuy  tama38={values.tama38} pinuyBinuy={values.pinuyBinuy} onChange={handleChange} ></ChooseTamaAndPinuyBinuy> */}
        <ChooseTamaAndPinuyBinuy
  values={values}
  handleChange={handleChange}
  errors={errors}
  touched={touched}
  getFieldProps={getFieldProps}

/>

      <Button  type="submit" variant="outlined">לחץ כדי להירשם</Button>
      <br></br>
      <br></br>
      </form>
    </>
  )
}
export default InitiatorRegister