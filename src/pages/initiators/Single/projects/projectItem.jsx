import { use } from 'react-router-dom';
import { TableRow,TableBody ,Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
//import Fab from '@mui/material/Fab';
//import EditIcon from '@mui/icons-material/Edit';
import StyledTableCell from './styleTable/StyledTableCell'
import StyledTableRow from './styleTable/StyledTableRow'


const ProjectItem = ({project}) => {
  const {address,city,status,apartmentBefore,apartmentAfter,requestYear,permitYear,startConstructionYear,populatingYear,description}=project

    return (
     <>
      {/* <Table sx={{ minWidth: 700 }} aria-label="customized table"> */}
       <TableBody>
          
             <StyledTableRow>
    
             <StyledTableCell >{address}</StyledTableCell>
             <StyledTableCell >{city}</StyledTableCell>
             <StyledTableCell >{status}</StyledTableCell>
             <StyledTableCell >{apartmentBefore}</StyledTableCell>
             <StyledTableCell >{apartmentAfter}</StyledTableCell>
             <StyledTableCell >{requestYear}</StyledTableCell>
             <StyledTableCell >{permitYear}</StyledTableCell>
             <StyledTableCell >{startConstructionYear}</StyledTableCell>
             <StyledTableCell >{populatingYear}</StyledTableCell>
             <StyledTableCell >{description}</StyledTableCell>
             <StyledTableCell ><img style={{width:"50px"}} src='http://localhost:3600/images/f0b01687-fd45-4486-914a-3333dada8359_Bell_pep.jpg' /></StyledTableCell>


             <StyledTableCell >
{/* 
             <Fab  color="secondary" aria-label="edit">
          <EditIcon />
            </Fab> */}

             </StyledTableCell>

             
             </StyledTableRow>
           
        </TableBody>
      </>
    )
  }
  
  
  export default ProjectItem;
  