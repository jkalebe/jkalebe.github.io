import React, { Component } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';

export default class navBar extends Component {
    render() {
        return (
            <div>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand style={{fontSize:'2rem'}} href="#home">Portfólio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{fontSize:'1.5rem'}} className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#formation">Formação</Nav.Link>
                    <Nav.Link href="#xperiencia">Experiencia</Nav.Link>
                    <Nav.Link href="#portfolio">Portfólio</Nav.Link>
                    <Nav.Link href="#contact">Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
        )
    }
}
