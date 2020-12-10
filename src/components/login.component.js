import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
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
       console.log(user);

       axios.post('http://localhost:3000/users/login', user)
            .then(res => console.log(res.data));
            
        //window.location = "/home";
    }

    onRegister(e){
        e.preventDefault();
        window.location = "/register";
    }

    render(){
        return(
            <div>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
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
                        <input type="submit" value="Submit" className="btn btn-outline-primary btn-lg btWidth" />
                    </div>
                </form>
                <small>Don't have an account?</small>
                <form onSubmit={this.onRegister}>
                    <div className="register">
                        <input type="submit" value="Register" className="btn btn-outline-primary btn-lg btWidth" />
                    </div>
                </form>
            </div>
        );
    }
}