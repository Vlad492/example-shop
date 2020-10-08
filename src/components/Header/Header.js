import React, { useState, useEffect, useContext } from "react"
import { Categories, HeaderUser,Finder } from './HeaderComponenets/exporter'
import { Redirect, Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Modal } from 'react-bootstrap'
import { User } from '../../contexts'

export default function Header() {
        return (

            <Navbar className="w-100" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={NavLink} to="/">Example-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Categories />
                        <HeaderUser />
                        <Nav.Link as={Link} to="/delivery" >Delivery</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus" >About us</Nav.Link>

                    </Nav>
                    <Finder />
                </Navbar.Collapse>
            </Navbar>

        )
    

}