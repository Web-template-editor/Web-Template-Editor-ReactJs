import React from "react";
import { Button } from "react-bootstrap";
function Selection(){
    return(
        <div className="d-grid gap-2 container component">
  <Button variant="light" size="lg"><a href="/Projectlist"> PROJECT</a>
   
   </Button>
   <Button variant="light" size="lg"><a href="/Members"> MEMBERS</a>
     
   </Button>
</div>
    )
}
export default Selection