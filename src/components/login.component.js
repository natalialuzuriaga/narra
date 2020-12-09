import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class Login extends Component{
    constructor(props){
        super(props);
        
        this.onEnterUsername = this.onEnterUsername.bind(this);
        this.onEnterPassword = this.onEnterPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }

    onEnterUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onEnterPassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }
       // console.log(user)
        //add this after creating the home page
        //window.location = "/home";
    }

    onRegister(e){
        e.preventDefault();
        window.location = "/register";
    }

    render(){
        return(
            <Container className="w-50">
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input type="text"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onEnterUsername}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Password: </label>
                        <input  type="password"
                                required
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onEnterPassword}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
                <small>If you have not registered</small>
                <form onSubmit={this.onRegister}>
                    <div className="register">
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </Container>
        );
    }
}