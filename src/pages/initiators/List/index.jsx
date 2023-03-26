import { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import InitiatorItem from './initiatorItem';
import Cities from '../City';
import { Table,TableBody,TableHead ,TableRow} from '@mui/material';
import StyledTableCell from '../../initiators/Single/projects/styleTable/StyledTableCell'

const InitiatorsList = () => {
    const [initiators, setInitiators] = useState([]);
    const [filtersInitiators, setFiltersInitiators] = useState([]);



    const[sortNumOfProject,setSortNumOfProject]=useState(false);
    const[sortRating,SetSortRating]=useState(false);

    const[filterInitiatorByTamaAndPinuyBinuy,SetFilterInitiatorByTamaAndPinuyBinuy]=useState(false);
    const[searchName,SetSearchName]=useState('');


    useEffect(() => {
      async function fetchData() {
          const {data:_initiators} = await axios.get("http://localhost:3600/initiator")
          if(_initiators?.length)
          {
            setInitiators(_initiators)  
            setFiltersInitiators(_initiators)

          }        
          
        }
        fetchData()
    }, []);

    const choosenInitiators=(num)=>{
      initiators.filter(initiator=>initiator.name.startsWith())

    }


//cursor pointer

  return (   
    <>
    <div>initiators---</div>
    <input onChange={(e)=>{()=>choosenInitiators()}}></input>
    <Table>

    <TableHead>

    <TableRow>
            <StyledTableCell align="left">יזם</StyledTableCell>
            <StyledTableCell align="left">חברה</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">לעידכון</StyledTableCell>
          </TableRow>
          </TableHead>


      <TableBody>
      {filtersInitiators?.length && filtersInitiators.map((initiator)=>{return <InitiatorItem initiator={initiator} /> })}
    </TableBody>
    </Table>
    </>
  )
}

export default InitiatorsList;

