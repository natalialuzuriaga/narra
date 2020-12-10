import React, { Component } from 'react';
import logo from './tree.png';



export default class Welcome extends Component {
  constructor(props){
    super(props);
  
    this.onLogin = this.onLogin.bind(this);

  }

  onLogin(e){
    e.preventDefault();
    window.location = "/login";
  }
  render() {
    return (
        <div class="text-center">
          <img  src={logo} alt="tree"  width="300" height="300"/>
          <h1>
            <p>narra</p>
          </h1>
          <form onSubmit={this.onLogin}>
                    <div className="login">
                        <input type="submit" value="Login or Register" className="btn btn-outline-primary btn-lg btWidth" />
                    </div>
        </form>
        </div>
    );
  }
}