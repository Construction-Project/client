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
import Avatar from '@mui/material/Avatar';
import { Box } from "@mui/system";
//



import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const InitiatorItem = ({ initiator, loadInitiator, setLoadInitiator }) => {
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
        {/* <Checkbox checked={intiatorsIds.find(id=>id===initiatorId)} 
        onChange={(e,checked)=>{
                if(checked) setIntiatorsIds([...intiatorsIds, initiator.id])
                else setIntiatorsIds(intiatorsIds.filter(id=>id!==initiatorId))}}
        /> */}
        <CardContent sx={{alignItems:'center'}}>
          <Avatar
           sx={{alignItems:'center'}}
            alt={initiator.name || initiator.company_name}
            src={`http://localhost:3600/images/${initiator.logo}`}

          />
          <Typography   sx={{ mb: 1.5 ,textAlign:'center'}} gutterBottom variant="h5" component="div">id:
            {id}
          </Typography>
          <Typography sx={{ mb: 1.5 ,textAlign:'center'}} variant="body2" color="text.secondary">name:
            {name}
          </Typography>
          <Typography  sx={{ mb: 1.5 ,textAlign:'center'}} variant="body2" color="text.secondary">שם חברה:
            {company_name}
          </Typography>
          <Typography  sx={{ mb: 1.5 ,textAlign:'center'}} variant="body2" color="text.secondary">פלאפון:
            {phone}
          </Typography>
          <Typography  sx={{ mb: 1.5 ,textAlign:'center'}} variant="body2" color="text.secondary">כתובת:
            {address}
          </Typography>
          <Typography  sx={{ mb: 1.5 ,textAlign:'center'}} variant="body2" color="text.secondary">מספר פרויקטים שבוצעו:
            {parseInt(numOfProject)}
          </Typography>
          <Typography  sx={{ mb: 1.5 ,textAlign:'center'}} variant="body2" color="text.secondary">
            <DisplayRating stars={rating}></DisplayRating>
          </Typography>
          <Box  sx={{display:'flex' }} justifyContent='space-evenly'></Box>
          {currentUser ?
            <Typography  sx={{ mb: 1.5 ,textAlign:'center'}} variant="body2" color="text.secondary">
              <RatingInitiator initiatorId={id} loadInitiator={loadInitiator} setLoadInitiator={setLoadInitiator}></RatingInitiator>
            </Typography> :
            <Typography  sx={{ mb: 1.5 ,textAlign:'center'}} variant="body2" color="text.secondary">
              <ForbiddenRating></ForbiddenRating>
            </Typography>
          }
        </CardContent>
        <CardActions sx={{alignItems:'center'}}>
          <Button sx={{alignItems:'center'}}size="small" onClick={() => navigate(`${id}`)}>לפרטים נוספים</Button>

        </CardActions>
        
      </Card>



    </>
  )
}

export default InitiatorItem;

