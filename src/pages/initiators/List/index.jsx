import { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import InitiatorItem from './initiatorItem';
import Cities from '../City';
import { Table, TableBody, TableHead, TableRow, Input, Checkbox } from '@mui/material';
import StyledTableCell from '../../initiators/Single/projects/styleTable/StyledTableCell'
import { Grid, Typography } from "@material-ui/core";
import FormControlLabel from '@mui/material/FormControlLabel';
const InitiatorsList = () => {
  const [initiators, setInitiators] = useState([]);
  // const [filteredInitiators, setFilteredInitiators] = useState(initiators);
  // const [initiatorsIds, setInitiatorsIds] = useState(initiators);

  const [filterInitiatorByTamaAndPinuyBinuy, SetFilterInitiatorByTamaAndPinuyBinuy] = useState(false);
  const [searchName, SetSearchName] = useState('');


  const [query, SetQuery] = useState('');
  const [tama, SetTama] = useState(true);
  const [sortNumOfProject, setSortNumOfProject] = useState(true);
  const [sortRating, SetSortRating] = useState(false);
  const [pinuiBinui, setPinuiBinui] = useState(true);
  const [filteredInitiators, setFilteredInitiators] = useState([]);
  const [loadInitiator, setLoadInitiator] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data: _initiators } = await axios.get("http://localhost:3600/initiator")
      if (_initiators?.length) {
        console.log(_initiators);
        setInitiators(_initiators)

      }

    }
    fetchData()
  }, [loadInitiator]);
  const filtered = () => {
    const keys = ['name', 'company_name'] //fields to search in
    var res = initiators.filter((item) => {
      if (
        (query === "" || item.name.toLowerCase().indexOf(query) > -1)
        &&
        (
          (tama === true && pinuiBinui === true)
          ||
          (tama == true && tama == item.tama38)
          ||
          (pinuiBinui === true && pinuiBinui === item.pinuyBinuy)
        )
        )
        return true
      return false
    })
    return sortRating?res.sort((a,b)=>(a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0)):res
  }
  // const filtered = () => {
  //   var res = [];
  //   const keys = ['name', 'company_name'] //fields to search in
  //   res = initiators.filter((item) =>
  //     keys.some((key) => item[key]?.toLowerCase().includes(query)));

  //   // sortNumOfProject &&
  //   //  res.sort((a, b) => (a.numOfProject > b.numOfProject) ? 1 : ((b.numOfProject > a.numOfProject) ? -1 : 0))
  //   sortRating && res.sort((a, b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0))
  //   // res.sort((a, b) => (a.rating - b.rating || a.numOfProject?.localeCompare(b.numOfProject)));

  //   //https://mui.com/material-ui/react-toggle-button/ במקום cheakbox
  //   return res;
  // }
  

  return (
    <>

      <div style={{ paddingTop: "60px" }}>initiators---</div>
      
      {sortRating ? <Typography>ממוין לפי דירוג, ממוין לפי א-ב </Typography> : <Typography>ממוין לפי א-ב </Typography>}
      
     
      <Input placeholder='חיפוש לפי שם יזם/חברה' onChange={(e) => { SetQuery(e.target.value) }}></Input>
        
        <FormControlLabel onChange={() => { SetTama(!tama) }} control={<Checkbox defaultChecked />} label="תמא 38" />
        <FormControlLabel onChange={() => { setPinuiBinui(!pinuiBinui) }} control={<Checkbox defaultChecked />} label="פינוי בינוי" />
        <FormControlLabel onChange={() => { SetSortRating(!sortRating) }} control={<Checkbox/>} label="מיון לפי דרוג" />



      <Table>

        {/* <TableHead>

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
          </TableHead> */}


        <TableBody>
          <Grid container spacing={2}>

            {initiators?.length && filtered().map((initiator) => { return <Grid item xs={4}><InitiatorItem initiator={initiator} loadInitiator={loadInitiator} setLoadInitiator={setLoadInitiator} /></Grid> })}
          </Grid>
        </TableBody>
      </Table>

    </>
  )
}

export default InitiatorsList;

//cursor pointer
