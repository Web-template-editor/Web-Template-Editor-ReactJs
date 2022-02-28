

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
function Projects(){
    const[data,setData]=useState([])

    useEffect(()=>{axios.get('http://localhost:8080/projects/project/').then((response)=>{
setData(response.data)


      })},[])    


    return(
      <div className="container table">
            
      <h1 className="sub-heading">PROJECTS</h1>

<div className="row justify-content-center">
<Table className="col-auto" striped bordered>
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
                     <td>2020-2022</td>
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