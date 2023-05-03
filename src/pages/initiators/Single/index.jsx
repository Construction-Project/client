import { useState } from "react";
import SingleIntiatorCard from "./Card";
import SingleIntiatorForm from "./Form";


const SingleIntiator=({initiator})=>{
    // useEffect(() => {
    //     async function fetchData() {
    
    //         const {data:_initiator} = await axios.get(`http://localhost:3600/initiator/${initiatorId}`)
    //         if(_initiator) setInitiator(_initiator)     
     
    //       }
    //       fetchData()
    //   }, []);
    

    const [isEditing,setIsEditing] = useState(false);
    return<>
    <div style={{paddingTop:"60px"}}></div>
    {console.log("in index/single",initiator)}
    {isEditing? <SingleIntiatorForm setIsEditing={setIsEditing} initiator={initiator}/>:<SingleIntiatorCard setIsEditing={setIsEditing}/>}


   
    </>
}


export default SingleIntiator; 


