import { InputLabel, Select, NativeSelect } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CitySelect = ({ getFieldProps }) => {
  const [citiesList, setCitiesList] = useState([]);
  useEffect(() => {
    async function fetchData() {

      var { data: _citiesList } = await axios.get(`http://localhost:3600/city`)
      console.log(_citiesList)

      if (_citiesList) setCitiesList(_citiesList)
      console.log({citiesList})
    }
    fetchData()

  }, []);
  return (<>

   <FormControl fullWidth>
  <InputLabel>עיר</InputLabel>
    <Select
    label="City"
     {...getFieldProps("city")}
    >
      {citiesList?.map((city, index) => <MenuItem key={city.idCity} value={city.idCity}>{city.city}</MenuItem>)}

    </Select>
    </FormControl>
    </>



  )
}

export default CitySelect



