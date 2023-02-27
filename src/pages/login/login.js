//https://freefrontend.com/css-code-examples/#sitemap-layouts
//https://codepen.io/andreacrawford/pen/NvqJXW
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom"
import { Navigate } from "react-router-dom";
import axios from "axios";
var validator = require("email-validator");

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [err, setErr] = useState(null);
    const navigate=useNavigate();
    const loginToServer = async (email,password) => {
        if(!validator.validate(email)){
            alert('email is not valid')
            return
        }
        try{
            const response= await axios.post("http://localhost:3600/auth/login",{ userName:email,password:password})
           localStorage.setItem("token", JSON.stringify(response.data.accessToken));
            navigate('/initiators')
        }
        catch(err){
            setErr(err.response.data?.message)
          } 

    return (
        <>
            <h2>login</h2>
            <input placeholder="enter your user name" onChange={e=>setEmail(e.target.value)}></input>
            <input placeholder="enter your password" type={"password"} onChange={e=>setPassword(e.target.value)}></input>
            <button onClick={()=>loginToServer(email,password)}>לחץ לכניסה</button>
            {err && err}

            <Link to="/register">אתה לא רשום? לחץ כאן</Link>
        </>
    )
}
}
export default Login

