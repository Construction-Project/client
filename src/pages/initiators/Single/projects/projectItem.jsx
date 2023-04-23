import { use } from 'react-router-dom';
import { TableRow, TableBody, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
//import Fab from '@mui/material/Fab';
//import EditIcon from '@mui/icons-material/Edit';
import StyledTableCell from './styleTable/StyledTableCell'
import StyledTableRow from './styleTable/StyledTableRow'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import UpdateProject from './updateProject';

const ProjectItem = ({ project }) => {
  const { address, city, status, apartmentBefore, apartmentAfter, requestYear, permitYear, startConstructionYear, populatingYear, description, Project_pictures } = project

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

          {console.log(Project_pictures)
          }             <StyledTableCell >{Project_pictures.map(picture => <img key={picture.picturePath} style={{ width: "50px" }} src={`http://localhost:3600/images/${picture.picturePath}`} />)}</StyledTableCell>
          <StyledTableCell ><img style={{ width: "50px" }} src='http://localhost:3600/images/f0b01687-fd45-4486-914a-3333dada8359_Bell_pep.jpg' /></StyledTableCell>


          <StyledTableCell >
            <Fab color="inherit" aria-label="edit" onClick={<UpdateProject></UpdateProject>}>
              <EditIcon />
            </Fab>
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>

    </>
  )
}


export default ProjectItem;
