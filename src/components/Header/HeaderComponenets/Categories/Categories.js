import React from 'react'
import {NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Categories() {
    return (
        <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/categories/Smartphones'>Smarthones</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/categories/Monitors'>Monitors</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/categories/pc'>PC's</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to='/categories'>All categories</NavDropdown.Item>
        </NavDropdown>
    )
}