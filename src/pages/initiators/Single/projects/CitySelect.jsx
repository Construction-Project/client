import {InputLabel,Select} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CitySelect = ({city,setCity}) => {
    const [citiesList, setCitiesList] = useState([]);
    useEffect( () => {
        async function fetchData() {

             var {data:_citiesList} = await axios.get(`http://localhost:3600/city`)
             _citiesList=_citiesList.map(city=>city.city)
            console.log({_citiesList})
    
            if(_citiesList) setCitiesList(_citiesList) 
    
          
          
          }
    
        fetchData()
    
       }, []);
    const handleChangeCity=(e)=>{
        setCity(e.target.value)
      }
  return (

    <FormControl fullWidth>

<InputLabel id="demo-select-small-label">עיר</InputLabel>
<Select
  labelId="demo-select-small-label"
  id="demo-select-small"
  value={city}

  label="city"
  onChange={handleChangeCity}

 // {...getFieldProps("status")}
>
  <MenuItem value="">
    <em>בחר עיר</em>
  </MenuItem>
  
  {citiesList?.map((city,index)=><MenuItem value={city}>{city}</MenuItem>)}
  {/* <MenuItem value={1}>{status?.length? status[0]:''}</MenuItem>
  <MenuItem value={2}>{status?.length? status[1]:''}</MenuItem>

*/}
</Select>
</FormControl>
        
  )
}

export default CitySelect


        
