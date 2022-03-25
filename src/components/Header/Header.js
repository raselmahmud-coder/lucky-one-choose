import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
       <Container>
        <Navbar.Brand href="#home">Burger Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        </Navbar.Collapse>
       </Container>
            </Navbar>
            <h1 className='text-center'>Burger Shop</h1>
        </div>
    );
};

export default Header;