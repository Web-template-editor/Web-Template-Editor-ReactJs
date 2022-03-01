

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
function Projects(){
    const[data,setData]=useState([])

    useEffect(()=>{axios.get('https://web-template-editor-api.herokuapp.com/projects/project/').then((response)=>{
setData(response.data)


      })},[])    


    return(
      <div className="container table">
            
      <h1 className="sub-heading">PROJECTS</h1>

<div className="row justify-content-center">
<Table className="col-auto" bordered>
<thead>
  <tr>
    <th width="100">YEAR</th>
    <th width="400">PROJECT</th>

  </tr>
</thead>
<tbody>

  {data.map((val,key)=>{
              return(
                  
                  <tr key={key}>
                     <td>{val.projectYear}</td>
                        <td ><a href={"/Project/"+val.projectid}>{val.projectName}</a></td>
  
                  </tr>
              )
          })}
  
</tbody>
</Table>
      </div>
      </div>
      
    )
}
export default Projects;