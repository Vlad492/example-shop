import React from 'react'
import { User } from '../../../../contexts'
import { useState, useEffect, useContext } from 'react'
import { NavDropdown, Nav, Modal, Form, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function HeaderUser() {
    let userName = useContext(User).userInfo.name
    let userId = useContext(User).userInfo.id
    const {setToken,removeToken} = useContext(User)
    const [logged, setLogged] = useState(false)
    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);
    const [show, setLoginShow] = useState(false)// login modal
    const [login, setLogin] = useState('')//User login
    const [password, setPassword] = useState('')// user pasword
    const [name, setName] = useState('')

    const submit = () => {
        console.log('hello')
        handleLoginClose()
        setName('Vlad Hleb')
        setToken('qwdqwdqwdqwd', 'Vlad Hleb', '1231213')
        logIn()

    }
    useEffect(() => {
        if (userName !== '') {
            setName(userName)
            logIn()
        }
}, [])
const logIn = () => {
    setLogged(true)
}
const logout = () => {
    setLogged(false)
    removeToken()

}

if (logged) {
    return (
        <NavDropdown title={name} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to ={{pathname: `/likes/${userId}`}}>Likes</NavDropdown.Item>
            <NavDropdown.Item as= {Link} to ={{pathname : `/orders/${userId}`}}>Orders</NavDropdown.Item>
            <NavDropdown.Item as={Link} to = {{pathname : `/settings/${userId}`}}>Account Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
        </NavDropdown>

    )
} else {
    return (
        <>
            <Nav.Link onClick={handleLoginShow}>Log In</Nav.Link>
            <Modal show={show} onHide={handleLoginClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={login} onChange={(e) => setLogin(e.target.value)} required />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleLoginClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={submit} >
                        Log in
              </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
}

