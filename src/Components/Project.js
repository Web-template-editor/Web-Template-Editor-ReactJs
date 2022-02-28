import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './components.css';
import Details from "./Details";
function Project (){
  var param=useParams()
    const[project,setProject]=useState([])
    const[datas,setDatas]=useState([])
    useEffect(()=>{axios.get('http://localhost:8080/projects/project/'+param.id
    ).then((response)=>{

        setProject(response.data)


      })},[])
    useEffect(()=>{axios.get('http://localhost:8080/members/membersbyprojectid/'+param.id
    ).then((response)=>{

        setDatas(response.data)


      })},[])

        return(
        
            <div className='project container bg-dark text-white'>
            <br/><br/>
            <h1 className="project-name">{project.projectName}</h1><br/>
            <p>{project.projectDescription}</p>


    <Details datas={datas} projectdata={project}/>
            </div>
        )
        
    }

export default Project;