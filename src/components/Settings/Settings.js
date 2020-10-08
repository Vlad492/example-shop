import React from 'react'
import './Settings.scss'
import { Form,Button} from 'react-bootstrap'
import { withRouter } from "react-router";
import { Header } from "../exporter";

function Settings(props) {
    const back = () => {
        props.history.goBack()
    }
    return (
        <>
            <Header />
            <div className="categorieslist__navigation">
                <p onClick={back} className="navigation__text"><i class="fas fa-chevron-left"/>Back</p>
                <i class="fas fa-filter"></i>
            </div>
            <h2>Settings</h2>
            <section className="settings-section">
                    <div class="settings-section__img w-100">
                        <Form.Group controlId="formGroupEmail">
                            <img src="https://via.placeholder.com/300x250" />
                        </Form.Group>
                    </div>
                    <div class="settings-section__inputs w-100">
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            
                        </Form.Group>
                        <Button variant="primary" type="submit">
    Submit
  </Button>
                        </Form>
                    </div>
            </section>
        </>
    )
}

export default withRouter(Settings)