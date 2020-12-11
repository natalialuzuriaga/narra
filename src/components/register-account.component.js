import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Container } from 'react-bootstrap';

export default class RegisterAccount extends Component {
    constructor(props){
        super(props);
        this.continue = this.continue.bind(this);
        this.setValidated = this.setValidated.bind(this);
        this.state = {
            validated: false,
        }
    }

    setValidated() {
        this.setState({ validated: true });
    }

    continue(e) {
        e.preventDefault();
        const form = e.currentTarget;
        console.log(form);
        this.setValidated();
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            this.props.nextStep();
        }
    }

    render() {
        const { values, handleChange } = this.props;
        
        return (
            <Container className="w-50">
                <h2>
                    Register for Narra
                </h2>

                <Form noValidate validated={this.state.validated} onSubmit={this.continue}>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                                defaultValue={values.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid first name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange('lastName')}
                                defaultValue={values.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid last name.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                controlId="formBasicEmail"
                                required
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange('email')}
                                defaultValue={values.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                            <Form.Label>Confirm Email Address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="confirmEmail"
                                value={values.confirmEmail}
                                onChange={handleChange('confirmEmail')}
                                defaultValue={values.confirmEmail}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please confirm your email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="5">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange('username')}
                                    defaultValue={values.username}
                                />
                                <Form.Control.Feedback type="invalid">
                                Please provide a valid username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="7">
                            <Form.Label>Password (must be at least 8 characters)</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange('password')}
                                defaultValue={values.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password, minimum 8 characters.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md={{ span: 2, offset: 10 }}>
                            <Button
                                className="md-5"
                                variant="primary"
                                type="submit">
                                Continue
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}
