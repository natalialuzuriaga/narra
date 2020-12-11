import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
// import success from './success.png';

export default class RegisterSuccess extends Component {
    render() {
        return (
            <Container className="p-5 w-50">
                {/* <Image src={success}/> */}
                <h1>Success!</h1>
                <p>Taking you to matching page...</p>
            </Container>
        );
    }
}