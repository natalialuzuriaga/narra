import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
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
            password: '',
            errPass: false,
            errUser: false
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

    handleErrorResponse = (error) => {
        let errorResponse
        if(error.response && error.response.data) {
        //Handling Response Errors
          errorResponse = error.response.data;

          if(errorResponse.type === "INCORRECT_PASSWORD"){
              console.log(errorResponse.type)
            this.setState({
                errPass: true
            });
              
          }

          if(errorResponse.type === "NONEXISTENT"){
            console.log(errorResponse.type)
            this.setState({
                errUser: true
            });
          }
          
        } else if(error.request) {
          // TO Handle the default error response for Network failure or 404 etc.,
          errorResponse = error.request.message || error.request.statusText;

        } else {
            //handle other errors
          errorResponse = error.message;
          console.log(errorResponse)
        }
      }

    handleLogin = (res) => {
        window.location = "/match/"+res.data.id;
        console.log(res.data.id);
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }
       
        //reset errors
        this.setState({
            errUser: false,
            errPass: false
        });

       axios.post('http://localhost:3000/users/login', user)
            .then(res => this.handleLogin(res))
            .catch(error => this.handleErrorResponse(error));
    }

    onRegister(e){
        e.preventDefault();
        window.location = "/register";
    }

    render(){
        return(
            <Container className="w-50 p-5">
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
                    <div className="p-2 d-flex justify-content-center form-group">
                        <input type="submit" value="Submit" className="btn btn-outline-primary btn-lg btWidth" />
                    </div>
                    {this.state.errPass &&
                        <p style={{ color: 'red' }}>The password is incorrect</p>
                    }

                    {this.state.errUser &&
                        <p style={{ color: 'red' }}>This user does not exist</p>

                    }
                </form>
                <form onSubmit={this.onRegister}>
                    <div className="d-flex align-items-center flex-column">
                        <div className="mb-auto">
                            <small>Don't have an account?</small>
                        </div>
                        <div className="p-2 register">
                            <input type="submit" value="Register" className="btn btn-outline-primary btn-md btWidth" />
                        </div>
                    </div>
                </form>
            </Container>
        );
    }
}