
import React, { useState ,useEffect } from 'react'
import axios from "axios";





const Cities = () => {
    const [cities , setCities] = useState([]);
    useEffect(() => {
      async function fetchData() {

          const {data:_cities} = await axios.get("http://localhost:3600/city")
          if(_cities?.length) setCities(_cities)         

          

          // const {data:_cities} = await axios.get("https://data.gov.il/api/3/action/datastore_search")
          // if(_cities?.length) setCities(_cities)
          // console.log(_cities)    



          
          
        }
        fetchData()
    }, []);

    return (   
        <>
        <select>
        <option>בחר עיר</option>
            {cities?.length && cities.map((city)=>{return<option>{city.city}</option>})} 
        </select>
        
    
        </>
      )


}
export default Cities



