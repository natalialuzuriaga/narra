import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import logo from './tree.png';

export default class Landing extends Component {
  constructor(props){
    super(props);
  
    this.onLogin = this.onLogin.bind(this);

  }

  onLogin(e){
    e.preventDefault();
    window.location = "/login";
  }

  onRegister(e){
    e.preventDefault();
    window.location = "/register";
  }

  render() {
    return (
        <Container className="d-flex justify-content-center">
          <div className="text-center m-5">
            <img src={logo} alt="tree"  width="300" height="300"/>
            <h1 className="mt-2">
              <p>narra</p>
            </h1>
            <Row className="d-flex justify-content-md-center">
              <Col>
                <form onSubmit={this.onRegister}>
                  <div className="register">
                      <input type="submit" value="Register" className="btn btn-primary btn-lg btWidth" />
                  </div>
                </form>
              </Col>
              <Col>
                <form onSubmit={this.onLogin}>
                  <div className="login">
                      <input type="submit" value="Login" className="btn btn-secondary btn-lg btWidth" />
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
    );
  }
}