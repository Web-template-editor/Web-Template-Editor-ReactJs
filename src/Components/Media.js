import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Media(){
    var params=useParams()
    const[member,setMember]=useState([])
    useEffect(()=>{axios.get('http://localhost:8080/members/member/'+params.id).then((response)=>{
setMember(response.data)


      })},[]) 
    return(
        <div className="media container">
        <div class='media'>
        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/2x/external-user-advertising-kiranshastry-gradient-kiranshastry-4.png"/>
        <h1><b>{member.memberName}</b> </h1>
        <p> Hi i am {member.memberName} . i did this project during the pandemic time corona 2020. i did my graduation from ksdjkfjsk college and post graduation kfrom tkm engineering college. this was my final year mini project</p>
        <h1><b>MEDIA PROFILES</b></h1>
        <h1></h1>
        <img src="https://img.icons8.com/nolan/2x/linkedin.png" alt="pic"/><b><a href={member.memberLinkedIn}>LinkedIn</a></b>
        <img src="https://img.icons8.com/nolan/2x/facebook.png" alt="pic"/><b><a href={member.memberFacebook}>Facebook</a> </b>
        
        <img src="https://img.icons8.com/nolan/2x/github.png" alt="pic"/><b><a href={member.memberGithub}>Github</a></b><br/>
     
        <img src="https://img.icons8.com/nolan/2x/apple-mail.png" alt="pic"/><b>{member.memberEmail} </b><br/>
        <img src="https://img.icons8.com/nolan/2x/apple-phone.png" alt="pic"/><b>+91-{member.memberMobile} </b>
        
        </div>
        


            
  


        </div>
    )
}
export default Media;