import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Container } from 'react-bootstrap';

export default class Register extends Component {
    constructor(props){
        super(props);
        
        this.onEnterFirstName = this.onEnterFirstName.bind(this);
        this.onEnterLastName = this.onEnterLastName.bind(this);
        this.onEnterEmail = this.onEnterEmail.bind(this);
        this.onEnterConfirmEmail = this.onEnterConfirmEmail.bind(this);
        this.onEnterUsername = this.onEnterUsername.bind(this);
        this.onEnterPassword = this.onEnterPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            validated: false,
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            username: '',
            password: ''
        }
    }

    setValidated(){
        this.setState({ validated: true });
    }

    onEnterFirstName(firstName){
        this.setState({
            firstName: firstName.target.value
        });
    }

    onEnterLastName(lastName){
        this.setState({
            lastName: lastName.target.value
        });
    }

    onEnterEmail(email){
        this.setState({
            email: email.target.value
        });
    }

    onEnterConfirmEmail(confirmEmail){
        this.setState({
            confirmEmail: confirmEmail.target.value
        });
    }

    onEnterUsername(username){
        this.setState({
            username: username.target.value
        });
    }

    onEnterPassword(password){
        this.setState({
            password: password.target.value
        });
    }

    onSubmit(e) {
        const form = e.currentTarget;
        console.log(form);
        e.preventDefault();

        this.setValidated();
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            const user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                confirmEmail: this.state.confirmEmail,
                username: this.state.username,
                password: this.state.password
            };
            console.log(user);
            // add this after creating the home page
            // window.location = "/login";
        }
    }

    render() {
        return (
            <Container className="w-50">
                <h2>
                    Register for Narra
                </h2>

                <Form noValidate validated={this.state.validated} onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.onEnterFirstName}
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
                                value={this.state.lastName}
                                onChange={this.onEnterLastName}
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
                                value={this.state.email}
                                onChange={this.onEnterEmail}
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
                                value={this.state.confirmEmail}
                                onChange={this.onEnterConfirmEmail}
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
                                    value={this.state.username}
                                    onChange={this.onEnterUsername}
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
                                value={this.state.password}
                                onChange={this.onEnterPassword}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password, minimum 8 characters.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                
                </Form>

            </Container>
        );
    }
}
