import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
    return (
        <>
    <Navbar class="navbar navbar-expand-lg navbar-dark bg-primary">
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="https://cdn-icons-png.flaticon.com/128/4204/4204600.png" width="30" height="30" alt=""/>
        </a>
    </nav>
        <Container>
        <Navbar.Brand href="#home">POLÍTICA TRANSPARENTE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"> | PORTAL DOS DEPUTADOS</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Cabecalho