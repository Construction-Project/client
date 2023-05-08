import { use, useParams } from 'react-router-dom';
import { TableRow, TableBody, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
//import Fab from '@mui/material/Fab';
//import EditIcon from '@mui/icons-material/Edit';
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

const ProjectItem = ({ project, setProjects,loadProject,setLoadProject}) => {

  const deleteProject= async(id)=>{

    const config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }
    try{

    
    await axios.delete(`http://localhost:3600/project/${id}`,config)
      setProjects(null)
     setLoadProject(!loadProject)
    //refetch()
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
      

        <TableRow>

          <TableCell >{address}</TableCell>
          <TableCell >{city}</TableCell>
          <TableCell >{status}</TableCell>
          <TableCell >{apartmentBefore}</TableCell>
          <TableCell >{apartmentAfter}</TableCell>
          <TableCell >{requestYear}</TableCell>
          {/* <TableCell >{permitYear}</TableCell> */}
          <TableCell >{startConstructionYear}</TableCell>
          <TableCell >{populatingYear}</TableCell>
          <TableCell >{description}</TableCell>
          <TableCell >{Project_pictures.map(picture => <img key={picture.picturePath} style={{ width: "50px" }} src={`http://localhost:3600/images/${picture.picturePath}`} />)}</TableCell>
          {/* <TableCell ><img style={{ width: "50px" }} src='http://localhost:3600/images/f0b01687-fd45-4486-914a-3333dada8359_Bell_pep.jpg' /></TableCell> */}
{currentUser?.role=='initiator'&&currentUser?.id==initiatorId&&
<>
          <TableCell >                                                                                                       
            <Fab color="inherit" aria-label="edit" onClick={() => navigate(`/initiators/${initiatorId}/project/${idProject}`)}>
              <EditIcon />
            </Fab>
            </TableCell>
            <TableCell>
            <Button onClick={()=>deleteProject(project.idProject)}><DeleteIcon></DeleteIcon></Button>
          </TableCell>
          </>
          }
        </TableRow>
     

    </>
  )
}


export default ProjectItem;
