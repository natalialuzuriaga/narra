import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Container } from 'react-bootstrap';

export default class RegisterProfile extends Component {
    constructor(props){
        super(props);
        this.continue = this.continue.bind(this);
        this.back = this.back.bind(this);
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

    back(e) {
        e.preventDefault();
        this.props.prevStep();
    };

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
                            <Form.Label>MBTI Personality Type</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="personalityType"
                                value={values.personalityType}
                                onChange={handleChange('personalityType')}
                                defaultValue={values.personalityType}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid personality type.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="bio"
                                value={values.bio}
                                onChange={handleChange('bio')}
                                defaultValue={values.bio}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a bio.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="12">
                            <Form.Label>Profile Picture URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="img"
                                value={values.img}
                                onChange={handleChange('img')}
                                defaultValue={values.img}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Snapchat</Form.Label>
                            <Form.Control
                                type="text"
                                name="snapchat"
                                value={values.snapchat}
                                onChange={handleChange('snapchat')}
                                defaultValue={values.snapchat}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                            <Form.Label>Instagram</Form.Label>
                            <Form.Control
                                type="text"
                                name="instagram"
                                value={values.instagram}
                                onChange={handleChange('instagram')}
                                defaultValue={values.instagram}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control
                                type="text"
                                name="facebook"
                                value={values.facebook}
                                onChange={handleChange('facebook')}
                                defaultValue={values.facebook}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                            <Form.Label>Discord</Form.Label>
                            <Form.Control
                                type="text"
                                name="discord"
                                value={values.discord}
                                onChange={handleChange('discord')}
                                defaultValue={values.discord}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="2">
                            <Button
                                className="md-5"
                                variant="primary"
                                onClick={this.back}>
                                Back
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} md={{ span: 2, offset: 8 }}>
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
