
import React, { useState ,useEffect } from 'react'
import axios from "axios";


const Statuses = () => {
    const [statuses , setStatuses] = useState([]);
    useEffect(() => {
      async function fetchData() {

          const {data:_statuses} = await axios.get("http://localhost:3600/status")
          if(_statuses?.length) setStatuses(_statuses)         
          
        }
        fetchData()
    }, []);


    return (   
        <>
        <select>
        <option>בחר סטטוס פרויקט</option>
            {cities?.length && cities.map((city)=>{return<option>{city.city}</option>})} 
        </select>
        
    
        </>
      )


}
export default Statuses

