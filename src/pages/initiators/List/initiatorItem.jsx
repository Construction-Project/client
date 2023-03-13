import { useParams } from "react-router-dom";
import { useState } from "react";

import { Link ,useNavigate,Navigate} from "react-router-dom"
import { TableRow,Button,styled } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DisplayRating from "../DisplayRating";
import RatingInitiator from "./RatingInitiator";
import StyledTableCell from '../../initiators/Single/projects/styleTable/StyledTableCell'

const InitiatorItem = ({initiator}) => {
const {id,name,phone,address,numOfProject,rating}=initiator
const navigate=useNavigate()
//const {initiatorId}=useParams();

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
    <StyledTableCell ><RatingInitiator initiatorId={id}></RatingInitiator> </StyledTableCell>
  
    <StyledTableCell > <button onClick={()=>navigate(`${id}`)}>לפרטים נוספים</button> </StyledTableCell>

    </>
  )
}

export default InitiatorItem;

