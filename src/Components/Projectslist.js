import React from "react";
import { Button } from "react-bootstrap";
import Tableproject from "./Tableproject";
function Projectlist(){
    
    return(
        <div className="Projlist container">
            <Button className="mt-3" style={{float: 'right'}}  variant="outline-primary"><a href="/Projectform"> Add New Projects</a></Button><br/>
            
            <Tableproject/>
        </div>
    )
}
export default Projectlist