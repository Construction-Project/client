import { useParams } from "react-router-dom";

import { useState, useContext } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom"
import { TableRow, Button, styled } from '@mui/material';
//import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DisplayRating from "../DisplayRating";
import RatingInitiator from "./RatingInitiator";
import ForbiddenRating from "./forbiddenRating";
import StyledTableCell from '../../initiators/Single/projects/styleTable/StyledTableCell'
import { AuthContext } from '../../../context/authContext'

//
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//



import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const InitiatorItem = ({ initiator }) => {
  const { currentUser } = useContext(AuthContext);
  const { id, phone, address, company_name, numOfProject, rating, tama38, pinuyBinuy, description, logo, name } = initiator

  const navigate = useNavigate()
  //const {initiatorId}=useParams();

  return (
    <>
      {/* <TableRow>
        <StyledTableCell >{id}</StyledTableCell>
        <StyledTableCell >{name}</StyledTableCell>
        <StyledTableCell >{company_name}</StyledTableCell>

        <StyledTableCell >{phone}</StyledTableCell>
        <StyledTableCell >{address}</StyledTableCell>
        <StyledTableCell >{parseInt(numOfProject)}</StyledTableCell> */}
        {/* <StyledTableCell >{parseInt(rating)}</StyledTableCell> */}
        {/* <StyledTableCell ><DisplayRating stars={rating}></DisplayRating></StyledTableCell>
        {currentUser != null ?
          <StyledTableCell ><RatingInitiator initiatorId={id}></RatingInitiator> </StyledTableCell> :
          <StyledTableCell ><ForbiddenRating></ForbiddenRating></StyledTableCell>

        }

        <StyledTableCell > <button onClick={() => navigate(`${id}`)}>לפרטים נוספים</button> </StyledTableCell>
      </TableRow>
       */}
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">id: 
            {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">name:
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">שם חברה: 
            {company_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">פלאפון:
            {phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">כתובת:
            {address}
          </Typography>
          <Typography variant="body2" color="text.secondary">מספר פרויקטים שבוצעו: 
            {parseInt(numOfProject)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <DisplayRating stars={rating}></DisplayRating>
          </Typography>
          {currentUser?
          <Typography variant="body2" color="text.secondary">
          <RatingInitiator initiatorId={id}></RatingInitiator>
          </Typography>:
          <Typography variant="body2" color="text.secondary">
          <ForbiddenRating></ForbiddenRating>
          </Typography>
}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(`${id}`)}>לפרטים נוספים</Button>

        </CardActions>
      </Card>



    </>
  )
}

export default InitiatorItem;

