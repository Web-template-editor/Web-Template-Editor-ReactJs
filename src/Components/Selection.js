import React from "react";
import { Button } from "react-bootstrap";
function Selection(){
    return(
        <div className="container mt-4">
                    <div className="d-grid gap-2">
  <Button className="mt-3" variant="light" size="lg"><a href="/Projectlist"> PROJECTS</a>
   
   </Button>
   <Button className="mt-3" variant="light" size="lg"><a href="/Members"> MEMBERS</a>
     
   </Button>
</div>
        </div>

    )
}
export default Selection