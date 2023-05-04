import { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import ProjectItem from './projectItem';
import { styled ,TableHead,TableRow,Paper,TableContainer,TableCell,tableCellClasses,Alert, Table, TableBody} from '@mui/material';
//import { tableCellClasses } from '@mui/material/TableCell';
import { Update } from '@material-ui/icons';
import UpdateProject from './updateProject';


const ProjectsList = () => {
    const [projects , setProjects] = useState([]);
    const [updateProject,setUpdateProject]=useState(false);
  const [projectsChange,setProjectsChange]=useState(false)
    const {initiatorId}=useParams();
    //console.log(initiatorId)
    useEffect(() => {
      async function fetchData() {

          const {data:_projects} = await axios.get(`http://localhost:3600/project/?initiatorId=${initiatorId}`)
          console.log(_projects)
          if(_projects?.length) setProjects(_projects)         
          
        }
        fetchData()
    }, [projectsChange]);


    return (   
      !updateProject?
        <>
        <TableContainer component={Paper}>
          <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">address</TableCell>
            <TableCell align="right">city</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">apartmentBefore</TableCell>
            <TableCell align="right">apartmentAfter</TableCell>
            <TableCell align="right">requestYear</TableCell>
            <TableCell align="right">startConstructionYear</TableCell>
            <TableCell align="right">populatingYear</TableCell>
            <TableCell align="right">description</TableCell>
            <TableCell align='right'>image</TableCell>
            <TableCell align="right">לעידכון</TableCell>
            <TableCell align="right">delete</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
            {projects?.length?
            
            projects.map((project)=>{return <ProjectItem project={project} projectsChange={projectsChange} setProjectsChange={setProjectsChange}/> })
            :<Alert severity="info">לא נמצאו פרויקטים</Alert>
            }
             </TableBody>
            </Table>
        </TableContainer>
        </>:
<UpdateProject project={projects}></UpdateProject>
      )
}


export default ProjectsList





