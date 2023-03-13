import { useState } from "react";
import SingleIntiatorCard from "./Card";
import SingleIntiatorForm from "./Form";


const SingleIntiator=()=>{
    const [isEditing,setIsEditing] = useState(false);
    return<>
    {isEditing? <SingleIntiatorForm setIsEditing={setIsEditing}/>:<SingleIntiatorCard setIsEditing={setIsEditing}/>}
    </>
}


export default SingleIntiator; 


