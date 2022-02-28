import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Projectform() {

const[project_id,setProjectId]=useState('')
const[project_name,setProjectName]=useState('')
const[external_guide,setProjectExternalGuide]=useState('')
const[internal_guide,setProjectInternalGuide]=useState('')
const[project_description,setProjectDescription]=useState('')
const[project_year,setProjectYear]=useState('')


    return (
        <div className="projform container bg-dark">
            <br />
            <h3 className="sub-heading text-white">ADD NEW PROJECT</h3>
            <Form className="text-white">
                <Form.Group as={Row} className=" mb-2" controlId="formPlaintextId">
                    <Form.Label column sm="2">
                        PROJECT ID
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={project_id} onChange={(e)=>setProjectId(e.target.value)} type="text" placeholder="ID" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                       PROJECT NAME
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={project_name} onChange={(e)=>setProjectName(e.target.value)} type="text"  placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextYear">
                    <Form.Label column sm="2">
                        Year
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={project_year} onChange={(e)=>setProjectYear(e.target.value)} type="text" placeholder="Year" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextGuide">
                    <Form.Label column sm="2">
                        External GUIDE
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={external_guide} onChange={(e)=>setProjectExternalGuide(e.target.value)} type="text" placeholder="External Guide" />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextIntGuide">
                    <Form.Label column sm="2">
                        Internal GUIDE
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={internal_guide} onChange={(e)=>setProjectInternalGuide(e.target.value)} type="text" placeholder="Internal Guide" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} value={project_description} onChange={(e)=>setProjectDescription(e.target.value)} className="mb-2" controlId="formPlaintextprojectDescription">
                    <Form.Label column sm="2">
                        Project Description
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as='textarea' rows={10} placeholder='Describe about your project' type="text"  />
                        <Button onClick={submitData} className="mt-4 mb-4" style={{float: 'right'}} variant="outline-primary">ADD</Button><br/>

                    </Col>
                </Form.Group>
                

            </Form>
        </div>
    )
    function submitData(){
        let employee =  {projectid: project_id,
        projectName: project_name,
        projectDescription: project_description,
        internalGuide: internal_guide,
        externalGuide: external_guide,
        projectYear:project_year
    
    };
    
    
    
        axios
        .post("http://localhost:8080/projects/project", employee)
        .then((response) => {
        });
        window.location.href='/Projectlist'

}



}
export default Projectform