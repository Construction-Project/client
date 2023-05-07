import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom"
import axios from "axios";
import { useFormik, FormikValues } from "formik";
import { Button, TextField, Input, Grid } from '@mui/material';
import * as yup from 'yup';
import { AuthContext } from '../../context/authContext'
import InitiatorItem from "../initiators/List/initiatorItem";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InitiatorItemLess from "./initiatorItemLess";



const Request = () => {
  const [requestSend, setRequestSend] = useState(false);

  const [initiators, setInitiators] = useState([]);
  const [query, SetQuery] = useState('');
  const [tama, setTama] = useState(true);
  const [pinuiBinui, setPinuiBinui] = useState(true);
  const [filteredInitiators, setFilteredInitiators] = useState([]);
  const [initiatorsIds, setInitiatorsIds] = useState([]);
  const { token ,currentUser} = useContext(AuthContext)
  // const [filteredInitiators, setFilteredInitiators]=usestate([initiators])

  const filtered = () => {
    const keys = ['name', 'company_name'] //fields to search in
   const f= initiators.filter((item) => {
    //console.log("adsfasdf", item)
      if (
        (query === "" || item.name.toLowerCase().indexOf(query) > -1)
        &&(
        (tama=== item.tama38 )
        ||
        (pinuiBinui=== item.pinuyBinuy))
      ) {
        return true
      }
      return false
    })
    return f
  }
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('כתובת אימייל לא תקינה')
      .required('שדה חובה')
  });
  useEffect(() => {
    async function fetchData() {
      const { data: _initiators } = await axios.get("http://localhost:3600/initiator")
      if (_initiators?.length) {
        // console.log("in use effect")
        // console.log(_initiators);
        setInitiators(_initiators)
        setFilteredInitiators(_initiators)
        const newData=_initiators.map((item) => item.id)
        console.log(newData)
        setInitiatorsIds(newData)
        //setInitiatorsIds([...initiatorsIds])
        //console.log(initiatorsIds,"initiatorsIds useEffect")
      }
    }
    fetchData()
  }, []);

  useEffect(() => {
   const dataFiltered = filtered()
   setFilteredInitiators(dataFiltered)
  }, [query, tama, pinuiBinui]);

  useEffect(() => {
    console.log({initiatorsIds})
   }, [initiatorsIds]);

  const selectItem = (id) =>{
      console.log("selectItem", id)
      setInitiatorsIds([...initiatorsIds,id])
      
  }
  const unSelectItem = (id) =>{
      console.log("unSelectItem", id)
      setInitiatorsIds(initiatorsIds.filter(ids=>id!=ids))
  }
  const { handleSubmit, handleChange, values, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      //id:'',
      name: '',
      email: '',
      phone: '',
      addressProject: '',
      comments: '',
      initiatorId: []
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(filteredInitiators,"filteredInitiators onSubmit")
      console.log(initiatorsIds,"initiatorsIds onSubmit")
      //const selectdAndFileredInitiators = filteredInitiators.filter(initiator => initiatorsIds.find(id => id === initiator.id))
      //const selectdAndFileredInitiators1 = initiatorsIds.filter(id => filteredInitiators.find(initiator => initiator.id === id))
      //console.log(selectdAndFileredInitiators1,"selectdAndFileredInitiators1 onSubmit")
     // const selectdAndFileredInitiators2=selectdAndFileredInitiators1
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token
          //  'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }
      //const {data:_initiators} = await axios.get("http://localhost:3600/initiator")
      //if(_initiators?.length) setInitiator(_initiators)  
      //console.log(initiator);
      //setFilteredInitiators = filtered().map(initiator => initiator.id);
      //values.initiatorId=initiatorId;
      //values.id=currentUser.id;
      //console.log(values.id)
      //console.log(initiatorId);
      try {
        console.log("in try")
        
        initiatorsIds.length && await axios.post("http://localhost:3600/request", { userId: currentUser.id, name: values.name, email: values.email, phone: values.phone, addressProject: values.addressProject, comments: values.comments ,initiatorsArr:initiatorsIds}, config)
        setRequestSend(true)
      
      
      }//,initiatorsArr:selectdAndFileredInitiators1
      catch (err) {
        console.log(err.response.data?.message)
      }
    }

  })
  return (
    <>
{/* {requestSend?
}    <>
      <Alert severity="success" style={{ paddingTop: "60px" }}>
  <AlertTitle>Success</AlertTitle>
פנייתך נשלחה בהצלחה
 — <strong>check it out!</strong>
</Alert></>: */}


      <form onSubmit={handleSubmit} style={{ paddingTop: "60px" }}>
        <h2>request</h2>
        <div>הפניה תשלח ל {initiatorsIds.length} יזמים</div>
        <Input placeholder='חיפוש לפי שם יזם/חברה' onChange={(e) => { SetQuery(e.target.value) }}></Input>
        <FormControlLabel onChange={() => { setTama(!tama) }} control={<Checkbox defaultChecked />} label="תמא 38" />
        <FormControlLabel onChange={() => { setPinuiBinui(!pinuiBinui) }} control={<Checkbox defaultChecked />} label="פינוי בינוי" />
        <br></br><br></br>

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
        <Button type="submit" variant="outlined">שלח</Button>
        <br></br>
        <br></br>
      </form>
      {filteredInitiators?.length && 
      <Grid container spacing={2}>
      {filteredInitiators.map((initiator) => { 
       return <Grid item xs={4}><InitiatorItemLess unSelectItem={unSelectItem} selectItem={selectItem}  initiator={initiator} initiatorsIds={initiatorsIds} setInitiatorsIds={setInitiatorsIds} /></Grid>
        })}</Grid>}
      {/* {console.log(tama, "tama")}
      {console.log(initiatorsIds, "initiatorsIds")}
      {console.log(pinuiBinui, "pinui")}
      {console.log(!pinuiBinui, "not pinui")}
      {console.log(initiators)} */}
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




  // )}
}

export default Request