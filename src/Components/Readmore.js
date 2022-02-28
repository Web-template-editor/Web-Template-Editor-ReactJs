import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 200) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ?"...read more": " show less"}
      </span>
    </p>
  );
};
  
const Readmore = (props) => {
  return (
    <div className=' content'>
      <h4>
      <Card style={{ width: '18rem' }}>
  <Card.Body >
    <Card.Title className=" text-center ">{props.projectname}</Card.Title>
    <Card.Text>
    <ReadMore >
{props.projectdescription}
        </ReadMore>
    </Card.Text>
    <Button   variant="info"><a href={"/Project/"+props.pid}>Go to Project</a></Button>
  </Card.Body>
</Card>
        
      </h4>
    </div>
  );
};
  
export default Readmore;