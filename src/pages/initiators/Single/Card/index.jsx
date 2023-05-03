import ProjectsList from "../projects/projects";
import { Button ,TableRow} from '@mui/material';
import { Link ,Navigate,useNavigate,useParams} from "react-router-dom"
import AddProject from "../projects/AddProject";
import { useEffect ,useState,useContext} from "react";
import axios from 'axios'
import { AuthContext } from '../../../../context/authContext' 





const SingleIntiatorCard=({setIsEditing})=>{
const navigate=useNavigate(); 

const [initiator,setInitiator]=useState({})

const {initiatorId}=useParams();

const {currentUser} = useContext(AuthContext);


//לא ידעתי איך מעבירים כפרמטר את initiator 
//אז פשוט עשיתי עוד fetch לפי id
//יכול להיות שזה נכון ואז לא להחזיר את כל הפרטים מבחוץ - 
//בקיצור - להכרעה... 
useEffect(() => {
    async function fetchData() {

        const {data:_initiator} = await axios.get(`http://localhost:3600/initiator/${initiatorId}`)
        if(_initiator) setInitiator(_initiator)     
 
      }
      fetchData()
  }, []);



return <>
{/* {id,hp,phone,address,tama38,pinuyBinuy,description,logo,name,company_name} */}

<h1>{initiator.id}</h1>
<h1>{initiator.phone}</h1>
<h1>{initiator.address}</h1>
<h1>{initiator.tama38}</h1>
<h1>{initiator.pinuyBinuy}</h1>
<h1>{initiator.description}</h1>
{/* <img src=`${initiator.logo}`>{}</img> */}
{<img style={{ width: "50px" }} src={`http://localhost:3600/images/${initiator.logo}`} />}
<h1>{initiator.name}</h1>
<h1>{initiator.company_name}</h1>

<>in single card</>
<ProjectsList />


{currentUser?.role=='initiator'&&currentUser?.id==initiatorId&&
<>
<Button variant="outlined" onClick={()=>setIsEditing(true)}>עריכה</Button>
<AddProject/>
</>}
</>

}
export default SingleIntiatorCard; 


