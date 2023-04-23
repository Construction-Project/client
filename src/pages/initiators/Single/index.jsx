import { useState } from "react";
import SingleIntiatorCard from "./Card";
import SingleIntiatorForm from "./Form";


const SingleIntiator=()=>{
    const [isEditing,setIsEditing] = useState(false);
    return<>
    <div style={{paddingTop:"60px"}}></div>
    {isEditing? <SingleIntiatorForm setIsEditing={setIsEditing}/>:<SingleIntiatorCard setIsEditing={setIsEditing}/>}


   
    </>
}


export default SingleIntiator; 


