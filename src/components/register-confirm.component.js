import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

export default class RegisterConfirm extends Component {
    constructor(props){
        super(props);
        this.confirm = this.confirm.bind(this);
        this.back = this.back.bind(this);
        this.state = {
            errUser: false,
        }
    }

    confirm(e) {
        e.preventDefault();
        this.handleRegister()
    }

    handleErrorResponse = (error) => {
        let errorResponse
        if(error.response && error.response.data) {
        //Handling Response Errors
          errorResponse = error.response.data;

          if(errorResponse.type === "TAKEN"){
              console.log(errorResponse.type)
            this.setState({
                errUser: true
            });
          }
        } else if(error.request) {
          // Handle the default error response for Network failure or 404 etc.,
          errorResponse = error.request.message || error.request.statusText;

        } else {
            //handle other errors
          errorResponse = error.message;
        }
      }

    findType = async (res) => {
        //finds object id of type collection that holds the entered personality type
        const {personalityType, userId} = res.data
        console.log(personalityType)
        console.log(userId)

        await axios.get("http://localhost:3000/types/find/" + personalityType)
             .then(res => this.addToType(res, userId))
             .catch(error => console.log(error.message))
    }

    addToType = async (res, userNum) => {
        //adds user to types collection

        const user = {
            userId: userNum
        }
        await axios.post("http://localhost:3000/types/update/" + res.data.id, user)
            .then(this.props.nextStep())
            .catch(error => console.log(error.message))
    }

    handleRegister = async () => {

        console.log(this.props.values.firstName);
        console.log(this.props.values.lastName);
        console.log(this.props.values.password);


        const user = {
            firstName: this.props.values.firstName,
            lastName: this.props.values.lastName,
            username: this.props.values.username,
            password: this.props.values.password,
            email: this.props.values.email,
            personalityType: this.props.values.personalityType,
            biography: this.props.values.bio,
            snapchat: this.props.values.snapchat,
            instagram: this.props.values.instagram,
            facebook: this.props.values.facebook,
            discord: this.props.values.discord
        }
        //creates user object and adds to database
       await axios.post("http://localhost:3000/users/add", user)
            .then(res1 => {
                this.findType(res1)
            })
            .catch(error => this.handleErrorResponse(error))
    }

    back(e) {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        let {
            values: { firstName, lastName,
                email, username, personalityType, 
                bio, img, snapchat, instagram,
                facebook, discord }
        } = this.props;

        if (img === "") {
            img = "https://robohash.org/narra.png?set=set4";
        }
        
        return (
            <Container className="d-flex justify-content-center">
                <div className="pt-5 w-50 mb-5">
                    <Row>
                        <h2>Register for Narra</h2>
                    </Row>
                    <Row className="mt-3">
                        <Col md="4">
                            <Image src={img} roundedCircle fluid className="p-4" />
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
                    <Row className="mt-3">
                        <Col>
                            <Button
                                className=""
                                variant="primary"
                                onClick={this.back}>
                                Back
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                className="float-right"
                                variant="primary"
                                onClick={this.confirm}>
                                Confirm
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}