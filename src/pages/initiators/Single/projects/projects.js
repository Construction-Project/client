

import React, { useState ,useEffect } from 'react'
import axios from "axios";
import ProjectItem from './projectItem';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
          </TableRow>
        </TableHead>
         
            {projects?.length && projects.map((project)=>{return <ProjectItem project={project}/> })} 
        </TableContainer>
        </>
      )
}


export default ProjectsList





