import { useState,useContext } from "react";
import { Link, useNavigate ,Navigate} from "react-router-dom"
import axios from "axios";
import { useFormik, FormikValues } from "formik";
import {Button ,TextField} from '@mui/material';
import * as yup from 'yup';
import { AuthContext } from '../../context/authContext' 



const Request = () => {
 // const {token} = useContext(AuthContext)

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('כתובת אימייל לא תקינה')
      .required('שדה חובה')
  });

  const { handleSubmit, handleChange, values, getFieldProps  ,errors,touched} = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      addressProject: '',
      comments:''
    },
    

    validationSchema:validationSchema,
    onSubmit: async (values) => {

    const config = {
      headers: {
       // 'Authorization': 'Bearer ' + token
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
  }

      console.log('here')
      try {
        await axios.post("http://localhost:3600/request",{ name:values.name,email:values.email,addressProject:values.addressProject,comments:values.comments},config)      }
       catch (err) {
         console.log(err.response.data?.message)
       }
    }
  })


  return (
    <>
      <form onSubmit={handleSubmit}>
      <h2>register</h2>
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
        value={values.phone}
        id="outlined-basic"
        label="פלאפון"
        type="phone"
        variant="outlined"
        {...getFieldProps("phone")}
        onChange={handleChange}
        error={touched.phone && Boolean(errors.phone)}
        helperText={touched.phone && errors.phone}
        
        />


<TextField
        value={values.addressProject}
        id="outlined-basic"
        label="כתובת הפרויקט"
        type="phone"
        variant="outlined"
        {...getFieldProps("addressProject")}
        onChange={handleChange}
        error={touched.addressProject && Boolean(errors.addressProject)}
        helperText={touched.addressProject && errors.addressProject}
        
        />


<TextField
        value={values.addressProject}
        id="outlined-basic"
        label="הערות"
        type="phone"
        variant="outlined"
        {...getFieldProps("addressProject")}
        onChange={handleChange}
        error={touched.comments && Boolean(errors.comments)}
        helperText={touched.comments && errors.comments}
        
        />

      {/* <input placeholder="enter your name" onChange={e => setName(e.target.value)}></input>
      <br></br><br></br>
      <input placeholder="enter your email" onChange={e => setEmail(e.target.value)}></input>
      <br></br><br></br>
      <input type="password"placeholder="enter your password" onChange={e => setPassword(e.target.value)}></input>
      <br></br><br></br>
      <button onClick={()=>registerToServer(email,password,name)}>לחץ כדי להירשם</button>
      <br></br><br></br> */}
      {/* {err && err} */}
      <Button  type="submit" variant="outlined">לחץ כדי להירשם</Button>
      <br></br>
      <br></br>
      </form>
      <Link to="/initiatorRegister">רוצה להירשם כיזם? לחץ כאן</Link>
    </>

  )








  // const [name,setName] = useState('');
  // const [email,setEmail] = useState('');
  // const [phone,setPhone] = useState('');
  // const [addressProject,setAddressProject] = useState('');
  // const [comments,setComments] = useState('');


  // const [err, setErr] = useState(null);
  // const navigate=useNavigate();

  // const sendRequestToinitiators= async()=>{
  //   const config = {
  //     headers: {
  //       'Authorization': 'Bearer ' + localStorage.getItem("token")
  //     }
  // }
  //     await axios.post("http://localhost:3600/request",{ name:name,email:email,addressProject:addressProject,comments:comments},config)
  // }
  // return (

  //   <>
    
  //   <div>contact</div>

  //   <input type="name" placeholder="enter your name" onChange={e => setName(e.target.value)}></input>
  //     <br></br><br></br> 
  //   <input placeholder="enter your email" onChange={e => setEmail(e.target.value)}></input>
  //     <br></br><br></br>

  //   <input placeholder="enter your phone" onChange={e => setPhone(e.target.value)}></input>
  //     <br></br><br></br>
  //     <input placeholder="enter your address" onChange={e => setAddressProject(e.target.value)}></input>
  //     <br></br><br></br>
  //     <input placeholder="enter comments" onChange={e => setComments(e.target.value)}></input>
  //     <br></br><br></br>    
      

  //     <button onClick={sendRequestToinitiators}></button>

  //   </>



  // )
}

export default Request