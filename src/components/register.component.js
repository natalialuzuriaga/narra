import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Container } from 'react-bootstrap';

export default class Register extends Component {
    render() {
        return (
            <Container className="w-50">
                <h1>
                    Register for Narra
                </h1>

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                            />
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
                                type="text"
                                placeholder="Username"
                                name="username"
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group as={Col} md="7">
                            <Form.Label>Password (must be at least 8 characters)</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                            />
                        </Form.Group>
                    </Form.Row>

                    <div className="mb-3">
                        <Form.File>
                            <Form.File.Label>Profile Picture (must be .PNG or .JPG)</Form.File.Label>
                            <Form.File.Input />
                        </Form.File>
                    </div>

                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                name="city"
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="3">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="State"
                                name="state"
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="3">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zip"
                                name="zip"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button type="submit">Create Account</Button>
                
                </Form>

            </Container>
        );
    }
}
