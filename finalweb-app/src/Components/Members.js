import React from "react";
import { Button } from "react-bootstrap";
import Tablemember from "./Tablemember";

function Members(){
    return(

<div className="container">
    <br />
            <h1 className="sub-heading">MEMBERS</h1>
            <Button style={{float: 'right'}}  variant="outline-primary"><a href="/Memberform"> Add Members</a></Button><br/>
            <Tablemember/>
            
        </div>


    )
}
export default Members