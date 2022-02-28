import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
function Tablemember(){
  const[data,setData]=useState([])

  useEffect(()=>{axios.get('http://localhost:8080/members/member/').then((response)=>{
setData(response.data)


    })},[])  
    return(
      <div className="row justify-content-center mt-4">
  
  <Table className="col-auto" striped bordered hover variant="dark">
  <thead>
    <tr>
      <th width="100">Member id</th>
      <th width="400"> Name</th>
      <th > Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    
    {data.map((val,key)=>{
                return(
                  <tr key={key}>
      <td>{val.memberId}</td>
      <td>{val.memberName}</td>
      {/* <td><Button as="input" type="reset" value={val.memberId} href={'/updatemember/'+val.memberId} >Edit</Button></td> */}
      <td><Button  type="reset" value={val.memberId} href={'/updatemember/'+val.memberId} >Edit</Button></td>
    
      <td><Button onClick={deleteMember}  value={val.memberId} variant="outline-danger"  >Delete</Button></td>

    </tr>  
                  
                )
            })}
    
    
  </tbody>
</Table>
      </div>
      
    )
    function deleteMember(e){

      console.log(e.target.value)
      
       axios.delete('http://localhost:8080/members/member/'+e.target.value)
      .then((response) =>{
        console.log("deleted")
        window.location.href='/Members'
        
      } );

    }
}
export default Tablemember