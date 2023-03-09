import React, { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import './initiatorItem'
import InitiatorItem from './initiatorItem';
import Cities from '../city';
import { Table,TableBody } from '@mui/material';


const InitiatorsList = () => {
    const [initiators, setInitiators] = useState([]);
    useEffect(() => {
      async function fetchData() {
          // let config = {
          //     headers: {
          //       'Authorization': 'Bearer ' + localStorage.getItem("token")
          //     }
          // }
          const {data:_initiators} = await axios.get("http://localhost:3600/initiator")
          if(_initiators?.length) setInitiators(_initiators)         
          
        }
        fetchData()
    }, []);
//cursor pointer

    // const getAllInitiators = async() =>{
    //     const response=await fetch('http://localhost:3600/initiator');
    //     const data=await(response.json());
    //     setInitiators(data);
    // }
  return (   
    <>
    <div>initiators</div>
    {/* <button onClick={()=>getAllInitiators()}>לחץ לקבלת כל היזמים</button> */}
    <Table>
      <TableBody>
      {initiators?.length && initiators.map((initiator)=>{return <InitiatorItem initiator={initiator} />})} 
    </TableBody>
    </Table>
    {/* <InitiatorItem initiator={element}/> */}

    </>
  )
}

export default InitiatorsList;