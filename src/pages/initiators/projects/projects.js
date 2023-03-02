

import React, { useState ,useEffect } from 'react'
import axios from "axios";
import ProjectItem from './projectItem';


const ProjectsList = ({initiatorId}) => {
    const [projects , setProjects] = useState([]);
    useEffect(() => {
      async function fetchData() {

          const {data:_projects} = await axios.get(`http://localhost:3600/project/${initiatorId}`)
          if(_projects?.length) setProjects(_projects)         
          
        }
        fetchData()
    }, []);


    return (   
        <>
            {projects?.length && projects.map((project)=>{return <ProjectItem project={project}/> })} 
        </>
      )


}


export default ProjectsList





