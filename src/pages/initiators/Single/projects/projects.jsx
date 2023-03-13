import { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import ProjectItem from './projectItem';
import { styled ,TableHead,TableRow,Paper,TableContainer,TableCell,tableCellClasses} from '@mui/material';
//import { tableCellClasses } from '@mui/material/TableCell';
import StyledTableCell from './styleTable/StyledTableCell'

const ProjectsList = () => {
    const [projects , setProjects] = useState([]);
    const {initiatorId}=useParams();
    //console.log(initiatorId)
    useEffect(() => {
      async function fetchData() {

          const {data:_projects} = await axios.get(`http://localhost:3600/project/${initiatorId}`)
          if(_projects?.length) setProjects(_projects)         
          
        }
        fetchData()
    }, []);


    return (   
        <>
        <TableContainer component={Paper}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">address</StyledTableCell>
            <StyledTableCell align="right">city</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
            <StyledTableCell align="right">apartmentBefore</StyledTableCell>
            <StyledTableCell align="right">apartmentAfter</StyledTableCell>
            <StyledTableCell align="right">requestYear</StyledTableCell>
            <StyledTableCell align="right">startConstructionYear</StyledTableCell>
            <StyledTableCell align="right">populatingYear</StyledTableCell>
            <StyledTableCell align="right">description</StyledTableCell>
            <StyledTableCell align="right">לעידכון</StyledTableCell>
          </TableRow>
        </TableHead>
         
            {projects?.length && projects.map((project)=>{return <ProjectItem project={project}/> })} 
        </TableContainer>
        </>
      )
}


export default ProjectsList





