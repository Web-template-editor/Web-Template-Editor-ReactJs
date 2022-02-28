import React from "react";
import { ListGroup } from "react-bootstrap";

function Details(props) {
    return (
       
    <div>
<ListGroup>
        <h1 className="sub-heading">DETAILS</h1>
            <ListGroup.Item active>Internal Guide</ListGroup.Item>
            <ListGroup.Item>{props.projectdata.internalGuide}</ListGroup.Item>
            <br />
            <ListGroup.Item active>External Guide</ListGroup.Item>
            <ListGroup.Item>{props.projectdata.externalGuide}</ListGroup.Item>
            <br />
            <ListGroup.Item active>Students</ListGroup.Item>

{
    
    (props.datas).map((val,index)=>{
        return(
            <ListGroup.Item key={index} action href={"/Media/"+val.memberId}>{val.memberName}</ListGroup.Item>
            
        )
    })

}

            {/* <ListGroup.Item>Member 2</ListGroup.Item>
            <ListGroup.Item>Member 3</ListGroup.Item> */}
        </ListGroup>
    </div>      
        )
}

export default Details;