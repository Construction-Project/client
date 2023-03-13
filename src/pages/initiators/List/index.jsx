import { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import InitiatorItem from './initiatorItem';
import Cities from '../City';
import { Table,TableBody } from '@mui/material';


const InitiatorsList = () => {
    const [initiators, setInitiators] = useState([]);
    useEffect(() => {
      async function fetchData() {
          const {data:_initiators} = await axios.get("http://localhost:3600/initiator")
          if(_initiators?.length) setInitiators(_initiators)         
          
        }
        fetchData()
    }, []);
//cursor pointer

  return (   
    <>
    <div>initiators---</div>
    <Table>



      
      <TableBody>
      {initiators?.length && initiators.map((initiator)=>{return <InitiatorItem initiator={initiator} /> })}
    </TableBody>
    </Table>
    </>
  )
}

export default InitiatorsList;

