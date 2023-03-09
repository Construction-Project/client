import { useParams } from "react-router-dom";
import { Link ,useNavigate} from "react-router-dom"
import { Navigate } from "react-router-dom";
import { TableRow,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DisplayRating from "../DisplayRating";
import { useState } from "react";

const InitiatorItem = ({initiator}) => {
const {id,name,phone,address,numOfProject,rating}=initiator
const navigate=useNavigate()
const {initiatorId}=useParams();

const [rate,setRate]=useState(false);


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
  return (
    <>
    <TableRow />
    <StyledTableCell >{id}</StyledTableCell>
    <StyledTableCell >{name}</StyledTableCell>
    <StyledTableCell >{phone}</StyledTableCell>
    <StyledTableCell >{address}</StyledTableCell>
    <StyledTableCell >{numOfProject}</StyledTableCell>
    <StyledTableCell >{rating}</StyledTableCell>
    <StyledTableCell ><DisplayRating stars={rating}></DisplayRating></StyledTableCell>
    <StyledTableCell ><Button variant="outlined" onClick={setRate(true)}>לדירוג </Button></StyledTableCell>
  
    <StyledTableCell > <button onClick={()=>navigate(`${id}`)}>לפרטים נוספים</button> </StyledTableCell>
    {/* navigate:   singleInitiatorCard  =>initiator*/}

   {/* <button onClick={()=>navigate(`/project/${id}`)}>לפרטים נוספים</button> */}
    </>
  )
}

export default InitiatorItem;

