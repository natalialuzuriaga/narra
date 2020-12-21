import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import success from './success.png';

export default class RegisterSuccess extends Component {
    state = {
        redirect: false
      }
    
    componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 2000)
    }
    
    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return (
            this.state.redirect
            ? <Redirect to="/match" />
            : <Container className="p-5 w-50 text-center">
                <Image src={success} fluid/>
                <h1>Success!</h1>
                <p>Taking you to matching page...</p>
            </Container>
        );
    }
}