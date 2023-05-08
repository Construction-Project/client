import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, ThemeProvider, createTheme, textAlign } from '@mui/system';

const ProjectDetails = () => {
    const [project, setProject] = useState({idProject:0,address: '',City:'',Status:'', city: '', status: '', apartmentBefore: '', apartmentAfter: '', requestYear: '', permitYear: '', startConstructionYear: '', populatingYear: '', description: '',Project_pictures:[],tama38:false,pinuyBinuy:false })
    const { projectId, initiatorId } = useParams();
    useEffect(() => {
        async function fetchData() {

            const { data: _project } = await axios.get(`http://localhost:3600/project/${projectId}`)
            console.log("project", { _project })
            console.log(_project)

            if (_project) {
                setProject(_project)
            }

        }
        fetchData()
    }, []);
    return (<>
    <Box sx={{ mt:'300px', alignItems:'center',width: 1/4 ,boxShadow: 0,boxShadow: 4,
          borderRadius: 4,}} > 
    <Card sx={{ minWidth: 675,width:'200px',height:'200px' }}>
      <CardContent>
        <Typography sx={{alignItems:'center', fontSize: 20 ,textAlign:'center'}} color="text.secondary" gutterBottom>
             {project.City.city}-{project.address}
        </Typography>
      {project.pinuyBinuy?
      <Typography sx={{ mb: 1.5 ,textAlign:'center'}} color="text.secondary">
      פינוי בינוי
      </Typography>:
      <Typography sx={{ mb: 1.5,textAlign:'center' }} color="text.secondary">
      תמ"א 38
      </Typography>}
      <Box>
        <Typography sx={{ mb: 1.5 ,textAlign:'end'}} color="text.secondary">
        מספר הדירות לפני: {project.apartmentBefore}
        </Typography>
        <Typography sx={{ mb: 1.5 ,textAlign:'start'}} color="text.secondary">
        מספר הדירות אחרי: {project.apartmentAfter}
        </Typography>
        </Box>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>

    </Card>
    </Box>
    </>)
}
export default ProjectDetails;