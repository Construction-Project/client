import { useState,useContext,useEffect } from "react";
import { Link, useNavigate ,Navigate} from "react-router-dom"
import axios from "axios";
import { useFormik, FormikValues } from "formik";
import {Button ,TextField ,Input} from '@mui/material';
import * as yup from 'yup';
import { AuthContext } from '../../context/authContext' 



const Request = () => {
  const[initiators,setInitiators] = useState([]);
  const[query,SetQuery]=useState('');
  const {token} = useContext(AuthContext)
 const {currentUser} = useContext(AuthContext);


 const filtered = ()=>{
  const keys = ['name','company_name'] //fields to search in
    return initiators.filter((item) =>
      keys.some((key) => item[key]?.toLowerCase().includes(query)));
}


  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('כתובת אימייל לא תקינה')
      .required('שדה חובה')
  });
  useEffect(() => {
    async function fetchData() {
        const {data:_initiators} = await axios.get("http://localhost:3600/initiator")
        if(_initiators?.length)
        {
          console.log("in use effect")
          console.log(_initiators);
          setInitiators(_initiators) 
        }        
        
      }
      fetchData()
  }, []);

  const { handleSubmit, handleChange, values, getFieldProps  ,errors,touched} = useFormik({
    initialValues: {
      //id:'',
      name: '',
      email: '',
      phone: '',
      addressProject: '',
      comments:'',
      initiatorId:[]
    },
    

    validationSchema:validationSchema,
    onSubmit: async (values) => {

    const config = {
      headers: {
       'Authorization': 'Bearer ' + token
       //  'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
  }




  //const {data:_initiators} = await axios.get("http://localhost:3600/initiator")
  //if(_initiators?.length) setInitiator(_initiators)  
  //console.log(initiator);
  const initiatorsIdArr= filtered().map(initiator=> initiator.id);
  //values.initiatorId=initiatorId;
  //values.id=currentUser.id;
  //console.log(values.id)
  //console.log(initiatorId);
      try {
        console.log("in try")
        //console.log(initiatorId)initiatorsArr
        
        filtered().length && await axios.post("http://localhost:3600/request",{userId:currentUser.id, name:values.name,email:values.email,phone:values.phone,addressProject:values.addressProject,comments:values.comments,initiatorsArr:initiatorsIdArr},config)      }
       catch (err) {
         console.log(err.response.data?.message)
       }
    }

  })
 


  return (
    <>
      <form onSubmit={handleSubmit}  style={{paddingTop:"60px"}}>
      <h2>request</h2>
      <div>נבחרו {filtered().length} יזמים</div>
      <Input placeholder='חיפוש לפי שם יזם/חברה' onChange={(e)=>{SetQuery(e.target.value)}}></Input>
      <TextField
        value={values.name}
        id="outlined-basic"
        label="שם"
        variant="outlined"
        {...getFieldProps("name")}
        onChange={handleChange} 
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
        
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
        value={values.comments}
        id="outlined-basic"
        label="הערות"
        type="phone"
        variant="outlined"
        {...getFieldProps("comments")}
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
      <Button  type="submit" variant="outlined">שלח</Button>
      <br></br>
      <br></br>
      </form>
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