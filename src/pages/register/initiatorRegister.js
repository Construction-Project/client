import { useState } from "react";
import { Link , useNavigate} from "react-router-dom"
import axios from "axios";
import { Navigate } from "react-router-dom";

var validator = require("email-validator");

const InitiatorRegister = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [hp,setHp] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [pinuyBinuy,setPinuyBinuy] = useState(false)
    const [tama,setTama] = useState(false)
    const [description,setDescription] = useState('')
    const [companyName,setCompanyName] = useState('')
    const [err,setErr]=useState(null)
    const handlePinuyBinuy = () => { 
      setPinuyBinuy(!pinuyBinuy); 
    }; 
    const handleTama = () => { 
      setTama(!tama); 
      console.log(tama);
    };     
    const navigate=useNavigate();
    var validator = require("email-validator");
    const registerToServer = async (email,password,name,hp,phone,address,pinuyBinuy,tama,description,companyName) => {
      if(!validator.validate(email)){
          alert('email is not valid')
          return
      }
      try{
        console.log('before fetch');
        await axios.post("http://localhost:3600/auth/register",{userName:email,password:password,name:name,hp:hp,phone:phone,address:address,tama38:tama,pinuyBinuy:pinuyBinuy,description:description,company_name:companyName,role:'initiator'})
        navigate("/login")
      }
      catch(err){
        setErr(err.response.data?.message)
      }  
    }
  return (
    <>
    <h2>initiatorRegister</h2>
    <input placeholder="enter your name" onChange={e => setName(e.target.value)}></input>
    <br></br><br></br>
    <input placeholder="enter your email" onChange={e => setEmail(e.target.value)}></input>
    <br></br><br></br>
    <input type="password"placeholder="enter your password" onChange={e => setPassword(e.target.value)}></input>
    <br></br><br></br>
    <input placeholder="ח'פ" onChange={ e=> setHp(e.target.value)}></input>
    <br></br><br></br>
    <input placeholder="enter your phone number" onChange={e=>setPhone(e.target.value)}></input>
    <br></br><br></br>
    <input placeholder="enter your address" onChange={e=>setAddress(e.target.value)}></input>
    <br></br><br></br>
    <input type="checkbox" onChange={handlePinuyBinuy}></input>
    {'pinuyBinuy'} 
    <br></br>
    <input type="checkbox" onChange={handleTama}></input>
    {'tama 38'} 
    <br></br><br></br>
    <input placeholder="discription on yourself..." onChange={e=>setDescription(e.target.value)}></input>
    <br></br><br></br>
    <input placeholder="company name" onChange={e=>setCompanyName(e.target.value)}></input>
    <br></br><br></br>
    <button onClick={()=>registerToServer(email,password,name,hp,phone,address,pinuyBinuy,tama,description,companyName)}>לחץ כדי להירשם</button>
    <br></br><br></br>

    {err && err}
    </>
  )
}
export default InitiatorRegister