import React, { useEffect, useState } from "react";
import Readmore from "./Readmore";
import { Card } from "react-bootstrap";
import Home from "./Home";
import axios from "axios";
import Typing_effect from "./Typing_effect";


function Welcome(){
 
    const[data,setData]=useState([])

    useEffect(()=>{axios.get('http://localhost:8080/projects/project/').then((response)=>{
setData(response.data)


      })},[])    
    const styleWeb ={
        fontSize:33,
        textAlign:"left",
        color:"white",
        fontfamily:"Copperplate Papyrus",

    }
    const styleheading={
        fontSize:180,
        textAlign:"center",
        color:"white"
    }

    
    return(
        <div className="container">
                    <Home/>
                    <Typing_effect/>
       
        <h1 style={styleWeb}>TKM COLLEGE OF ENGINEERING</h1>
        
        <Card className="text-white">
        <Card.Title className="" style={{color:"black",fontSize:'3rem',textAlign:'center'}}>ABOUT</Card.Title>
    <Card.Text className="p-2" style={{color:"black"}}>
    TKM Engineering College kollam here presents a platform for the next generation.
        MCA batch of 2020-2022 created this web page as their project during their final semester.
        This page is created to expose the young ideas to the world.
        This place gives you a great start and exposure.
    </Card.Text>
   
</Card>
<br/>
<div className="row">

{data.map((val,key)=>{
                return(
                    <div key={key} className="col-xl-3 col-lg-4 col-md-6 col-sm-12" >

                    <Readmore projectname={val.projectName} projectdescription={val.projectDescription} pid={val.projectid} />
                    </div>

                   
                )
            })}
        </div>



        </div>

    )
}

export default Welcome;