import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Navibar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
                <Navbar.Brand>WebDev Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="mr-2" variant={"primary"}>Log In</Button>
                        <Button variant={"primary"}>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navibar;