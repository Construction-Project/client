
import axios from 'axios';
import { useEffect, useState } from 'react';
import {InputLabel,Select, FormControl} from '@mui/material';


const StatusSelect = ({statusChecked,setStatusChecked}) => {
    const [status, setStatus] = useState([]);

    useEffect( () => {
        async function fetchData() {
    
             var {data:_status} = await axios.get(`http://localhost:3600/status`)
            // _status=_status.map(status=>status.status)
            console.log({_status})
            if(_status) setStatus(_status) 
          }
    
        fetchData()
    
       }, []);

    const handleChangeStatus=(e)=>{
        setStatusChecked(e.target.value)
      }
      
  return (
<>

<FormControl fullWidth>
  <InputLabel>סטטוס</InputLabel>
  <Select  
    label='סטטוס'
    native
    defaultValue={statusChecked}
    onChange={handleChangeStatus}
  >
      {status?.map((status,index)=><option value={status.statusId}>{status.status}</option>)}
  </Select>
  </FormControl>

{/* <InputLabel id="demo-select-small-label">סטטוס</InputLabel> */}
{/* <Select
  labelId="demo-select-small-label"
  id="demo-select-small"
  defaultValue={'f'}
  value={statusChecked}
  label="status"
  onChange={handleChangeStatus}

 // {...getFieldProps("status")}
>
  <MenuItem value="">
    <em>בחר סטטוס</em>
  </MenuItem>
  
  {status?.map((status,index)=><MenuItem value={status}>{status}</MenuItem>)}
  {/* <MenuItem value={1}>{status?.length? status[0]:''}</MenuItem>
  <MenuItem value={2}>{status?.length? status[1]:''}</MenuItem>

*/}
</>
  )
}

export default StatusSelect
