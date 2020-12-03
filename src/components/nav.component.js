import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './tree.png';



export default class Navbar extends Component {
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
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          {/* <Link to="/" className="navbar-brand">narra</Link> */}
          <div className="collse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
            <Link to="/login" className="nav-link">Login/Register</Link>
            </li>
            <li className="navbar-item">
            <Link to="/match" className="nav-link">Match</Link>
            </li>
          </ul>
          </div>
        </nav>
        
      </div>
    );
  }
}