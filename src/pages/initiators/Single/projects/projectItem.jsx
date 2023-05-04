import { use, useParams } from 'react-router-dom';
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
import { useNavigate,Navigate } from 'react-router-dom';
import InitiatorItem from '../../List/initiatorItem';
import { AuthContext } from '../../../../context/authContext' 
import {  useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const ProjectItem = ({ project ,projectsChange={projectsChange},setProjectsChange={setProjectsChange}}) => {

  const deleteProject= async(id)=>{

    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }
    try{

    
    await axios.delete(`http://localhost:3600/project/${id}`,config)
    setProjectsChange(!projectsChange)
}
catch(err){
  console.log(err)
}

  }  


  const {currentUser} = useContext(AuthContext);

  const { idProject ,address, city, status, apartmentBefore, apartmentAfter, requestYear, permitYear, startConstructionYear, populatingYear, description, Project_pictures } = project
  const navigate = useNavigate()
  const {initiatorId}=useParams()
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

          {console.log(Project_pictures)}
          <StyledTableCell >{Project_pictures.map(picture => <img key={picture.picturePath} style={{ width: "50px" }} src={`http://localhost:3600/images/${picture.picturePath}`} />)}</StyledTableCell>
          <StyledTableCell ><img style={{ width: "50px" }} src='http://localhost:3600/images/f0b01687-fd45-4486-914a-3333dada8359_Bell_pep.jpg' /></StyledTableCell>



{currentUser?.role=='initiator'&&currentUser?.id==initiatorId&&
          <StyledTableCell >                                                                                                       
            <Fab color="inherit" aria-label="edit" onClick={() => navigate(`/initiators/${initiatorId}/project/${idProject}`)}>
              <EditIcon />
            </Fab>
            <Button onClick={()=>deleteProject(project.idProject)}><DeleteIcon></DeleteIcon></Button>

          </StyledTableCell>

          }
        </StyledTableRow>
      </TableBody>

    </>
  )
}


export default ProjectItem;
