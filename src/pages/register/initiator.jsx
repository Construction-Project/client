import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useFormik, FormikValues } from "formik";
import { Button, TextField, IconButton } from '@mui/material';
import * as yup from 'yup';
import { Navigate } from "react-router-dom";
import { validateYupSchema } from "formik";
import ChooseTamaAndPinuyBinuy from "./ChooseTamaAndPinuyBinuy";
import UploaderLogo from "../UploaderLogo";
import CloseIcon from '@mui/icons-material/Close';
import { Chip, Card, Grid } from "@material-ui/core";




//var validator = require("email-validator");

const InitiatorRegister = () => {
  const [picture, setPicture] = useState();
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
  const { handleSubmit, handleChange, values, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      hp: '',
      phone: '',
      address: '',
      pinuyBinuy: true,
      tama38: true,
      description: '',
      companyName: '',


    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      console.log('here')
      console.log(values.tama38)
      console.log(values.pinuyBinuy)



      try {
        console.log(`here in register initiator`)
        await axios.post("http://localhost:3600/auth/register", {
          userName: values.email, password: values.password, name: values.name,
          hp: values.hp
          , phone: values.phone, address: values.address
          , tama38: values.tama38, pinuyBinuy: values.pinuyBinuy, description: values.description, company_name: values.companyName, logo: picture.path,
          role: 'initiator'
        })
        navigate("/login")
      }
      catch (err) {
        console.log(err.response.data?.message)
      }
    }
  })
  const handleRemovingImage = (picToRemove) => {
    setPicture(null)
  }

  return (
    <>
      <h2>initiatorRegister</h2>
      <Card style={{margin:'auto',width:'60%',padding:'2%',marginTop:'5%'}}>
        <form onSubmit={handleSubmit} style={{ paddingTop: "60px" }}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                value={values.name}
                id="outlined-basic"
                label="שם"
                variant="outlined"
                {...getFieldProps("name")}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              /></Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
             
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
             <Grid item xs={6}>
              {/* <ChooseTamaAndPinuyBinuy  tama38={values.tama38} pinuyBinuy={values.pinuyBinuy} onChange={handleChange} ></ChooseTamaAndPinuyBinuy> */}
              <ChooseTamaAndPinuyBinuy
                values={values}
                handleChange={handleChange}
                errors={errors}
                touched={touched}
                getFieldProps={getFieldProps}
              />
            </Grid>
            <Grid item xs={6}>
            {!picture && <UploaderLogo picture={picture} setPicture={setPicture} label="Add Picture" />}
              {picture &&
                <Chip
                  label={picture.name}
                  variant="outlined"
                  onDelete={() => handleRemovingImage(picture)}
                />}
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" variant="outlined">לחץ כדי להירשם</Button>
            </Grid>
          </Grid>
        </form></Card>
    </>
  )
}
export default InitiatorRegister