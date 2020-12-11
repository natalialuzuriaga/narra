import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';

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
            <Container className="d-flex justify-content-center">
                <div className="pt-5 w-50">
                    <Row>
                        <h2>Register for Narra</h2>
                    </Row>
                    <Row>
                        <Form noValidate validated={this.state.validated} onSubmit={this.continue} className="w-100">
                            <Form.Row>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>
                                        Personality Type
                                        <p style={{display:"inline", color:"red"}}> *</p>
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        as="select" custom
                                        size="lg"
                                        type="text"
                                        name="personalityType"
                                        value={values.personalityType}
                                        onChange={handleChange('personalityType')}
                                        defaultValue={values.personalityType}
                                    >
                                        <option value="">Select...</option>
                                        <option value="ISTJ">ISTJ</option>
                                        <option value="ISFJ">ISFJ</option>
                                        <option value="INFJ">INFJ</option>
                                        <option value="INTJ">INTJ</option>
                                        <option value="ISTP">ISTP</option>
                                        <option value="ISFP">ISFP</option>
                                        <option value="INFP">INFP</option>
                                        <option value="INTP">INTP</option>
                                        <option value="ESTP">ESTP</option>
                                        <option value="ESFP">ESFP</option>
                                        <option value="ENFP">ENFP</option>
                                        <option value="ENTP">ENTP</option>
                                        <option value="ESTJ">ESTJ</option>
                                        <option value="ESFJ">ESFJ</option>
                                        <option value="ENFJ">ENFJ</option>
                                        <option value="ENTJ">ENTJ</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid personality type.
                                    </Form.Control.Feedback>
                                    <div style={{lineHeight: "90%", paddingTop:"5px"}}>
                                        <small>
                                            Your personality type as tested from the <a href="https://www.16personalities.com/">
                                            Myers-Briggs Personality Test
                                            </a>. This is what we use to match you with potential friends!
                                        </small>
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="8">
                                    <Form.Label>
                                        Bio (max 350 characters)
                                        <p style={{display:"inline", color:"red"}}> *</p>
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        rows="5"
                                        maxLength="350"
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

                            <Form.Label>
                                <h4>Socials</h4>
                                <p>This is the best way to communicate with
                                friends you add here!</p>
                            </Form.Label>

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
                                <Form.Group as={Col}>
                                    <Button
                                        className="md-5"
                                        variant="primary"
                                        onClick={this.back}>
                                        Back
                                    </Button>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Button
                                        className="md-5 float-right"
                                        variant="primary"
                                        type="submit">
                                        Continue
                                    </Button>
                                </Form.Group>
                            </Form.Row>    
                        </Form>
                    </Row>
                </div>
            </Container>
        );
    }
}
