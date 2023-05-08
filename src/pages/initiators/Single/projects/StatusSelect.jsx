
import {InputLabel,Select,NativeSelect} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import axios from 'axios';

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



  <Select 
        label='סטטוס'
        native
        style={{width:'50%'}}
          defaultValue={statusChecked}
    inputProps={{
      name: 'status',
      id: 'uncontrolled-native',
    }}
      onChange={handleChangeStatus}

  >
  {status?.map((status,index)=><option value={status.statusId}>{status.status}</option>)}

  </Select>

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
