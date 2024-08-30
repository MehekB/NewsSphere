import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

function NewsNavbar() {
    return (
        <Navbar fixed="top" className="rounded-navbar">
            <Container>
                <Navbar.Brand href="#home" className='website-name'>NewsSphere</Navbar.Brand>
                <Nav className="pages">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default NewsNavbar;