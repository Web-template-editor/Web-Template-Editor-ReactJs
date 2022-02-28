import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
function Tableproject(){
  const[data,setData]=useState([])

  useEffect(()=>{axios.get('http://localhost:8080/projects/project/').then((response)=>{
setData(response.data)


    })},[])  


    return(
        
        <div className="table">
            
        <h1 className="sub-heading">PROJECTS</h1>
 
<div className="row justify-content-center">
<Table className="col-auto" striped bordered hover variant="dark">
  <thead>
    <tr>
      <th width="100">Project ID</th>
      <th width="400">Project Name</th>
      <th > Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>

    {data.map((val,key)=>{
                return(
                    
                    <tr key={key}>
                           <td>{val.projectid}</td>
      <td>{val.projectName}</td>
      <td><Button  type="reset" value={val.projectid} href={'/updateproject/'+val.projectid} >Edit</Button></td>
      <td><Button onClick={deleteProject}  value={val.projectid} variant="outline-danger"  >Delete</Button></td>
      
                    </tr>
                )
            })}
    
  </tbody>
</Table>
        </div>
        </div>

    )
    function deleteProject(e){

      console.log(e.target.value)
      
       axios.delete('http://localhost:8080/projects/project/'+e.target.value)
      .then((response) =>{

        window.location.href='/Projectlist'
      } );

    }
    
}
export default Tableproject