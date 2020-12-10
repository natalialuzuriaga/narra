import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

export default class RegisterConfirm extends Component {
    constructor(props){
        super(props);
        this.confirm = this.confirm.bind(this);
        this.back = this.back.bind(this);
    }

    confirm(e) {
        e.preventDefault();
        this.props.nextStep();
    }

    back(e) {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { firstName, lastName,
                email, username, personalityType, 
                bio, img, snapchat, instagram,
                facebook, discord }
        } = this.props;
        
        return (
            <Container className="w-50">
                <h2>
                    Register for Narra
                </h2>
                <Row>
                    <Col md="4">
                        <Image src={img} roundedCircle fluid />
                    </Col>
                    <Col md="8">
                        <ListGroup variant="flush">
                            <ListGroup.Item>{firstName} {lastName}</ListGroup.Item>
                            <ListGroup.Item>Username: {username}</ListGroup.Item>
                            <ListGroup.Item>Email: {email}</ListGroup.Item>
                            <ListGroup.Item>Personality Type: {personalityType}</ListGroup.Item>
                            <ListGroup.Item>Bio: {bio}</ListGroup.Item>
                            <ListGroup.Item>Snapchat: {snapchat}</ListGroup.Item>
                            <ListGroup.Item>Instagram: {instagram}</ListGroup.Item>
                            <ListGroup.Item>Facebook: {facebook}</ListGroup.Item>
                            <ListGroup.Item>Discord: {discord}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="2">
                        <Button
                            className="md-5"
                            variant="primary"
                            onClick={this.back}>
                            Back
                        </Button>
                    </Col>
                    <Col md={{ span: 2, offset: 8 }}>
                        <Button
                            className="md-5"
                            variant="primary"
                            onClick={this.confirm}>
                            Confirm
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}