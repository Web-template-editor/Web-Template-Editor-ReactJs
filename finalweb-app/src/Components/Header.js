import React, { useEffect, useState } from "react";
import {Navbar,Nav,NavDropdown}from 'react-bootstrap';
import axios from "axios";

function Header(){
  const[project,setProject]=useState([])
  //const[ide,setIde]=useState('')

  useEffect(()=>{axios.get('http://localhost:8080/projects/project').then((response)=>{
    setProject(response.data)

  })},[])

  return(
  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="container">
    
  <Navbar.Brand href="/">WEB-TEMPLATE PROJECT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">HOME</Nav.Link>
      <Nav.Link href="/Projects">PROJECTS</Nav.Link>

      
    </Nav>
    <Nav>
      <Nav.Link href="/Selection">MORE INFO</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>

</Navbar>

)}

export default Header;