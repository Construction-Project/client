import React, { useState } from 'react'



const Initiators = () => {
    const [initiators, setInitiators] = useState([]);
    const getAllInitiators = async() =>{
        const response=await fetch('http://localhost:3600/initiator');
        const data=await(response.json());
        setInitiators(data);
    }
  return (
    
    <>
    <div>initiators</div>
    <button onClick={()=>getAllInitiators()}>לחץ לקבלת כל היזמים</button>
    {initiators!=[]? initiators.map((element)=>{return<>{element.id}, </>}):<></>}

    </>
  )
}

export default Initiators