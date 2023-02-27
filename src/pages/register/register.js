import { useState } from "react";
import { Link , useNavigate} from "react-router-dom"
import axios from "axios";
import { Navigate } from "react-router-dom";

var validator = require("email-validator");

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName]=useState('');
    const [err,setErr]=useState(null)
    const navigate=useNavigate();
    const registerToServer = async (email,password,name) => {
      if(!validator.validate(email)){
          alert('email is not valid')
          return
      }
      
      alert('valid')
      try{
        await axios.post("http://localhost:3600/auth/register",{ userName:email,password:password,name:name})
        navigate("/login")
      }
      catch(err){
        setErr(err.response.data?.message)
      }  
      }
  return (
    <>
      <h2>register</h2>
      <input placeholder="enter your name" onChange={e => setName(e.target.value)}></input>
      <input placeholder="enter your email" onChange={e => setEmail(e.target.value)}></input>
      <input type="password"placeholder="enter your password" onChange={e => setPassword(e.target.value)}></input>
      <button onClick={()=>registerToServer(email,password,name)}>לחץ כדי להירשם</button>
      {err && err}
      <Link to="/initiatorRegister">רוצה להירשם כיזם? לחץ כאן</Link>
    </>
  )
}
export default Register