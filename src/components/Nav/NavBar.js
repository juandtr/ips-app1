import React from "react";
import {Navbar, Container, NavDropdown, Collapse, Nav} from 'react-bootstrap';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCoffee} from '@fortawesome/free-solid-svg-icons'
import LOGO from '../assents/LOGO_01.png'

const Navbars =() =>{
    return (
        <Navbar  expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img className='logo' src={LOGO}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="active" href="#home">Home</Nav.Link>            
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Contactenos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Doctores</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Pide una Cita</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Preguntas frecuentes</NavDropdown.Item>                 
                  
                 
                </NavDropdown>
                <NavDropdown title="Servicios" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Servicios</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Servicios Dentales</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Blog" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Blog Dental</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Contactenos">Contactenos</Nav.Link>
                
                <Nav.Link href="#Search"> <FontAwesomeIcon icon={faSearch} /></Nav.Link>
                <Nav.Link href="#Login/register">
                    <button>Login/Register <span> <FontAwesomeIcon icon={faCoffee}/> </span> </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
}

export default Navbars