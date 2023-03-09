import ProjectsList from "../projects/projects";
import { Button } from '@mui/material';
import { Navigate } from "react-router-dom";
import { TableRow } from '@mui/material';
import { Link ,useNavigate} from "react-router-dom"

const SingleIntiatorCard=({setIsEditing, initiatorId})=>{
const navigate=useNavigate(); 

return <>

<h1>kjljhlji{initiatorId}</h1>
    <>in single card</>
<ProjectsList initiatorId={1}/>

{/* {initiator&&<button >Edit</button>} */}
<Button variant="outlined" onClick={()=>setIsEditing(true)}>עריכה</Button>

<Button variant="outlined">הכנס פרויקט חדש</Button>
</>

}
export default SingleIntiatorCard; 


