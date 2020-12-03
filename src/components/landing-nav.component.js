import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        {/* <Link to="/" className="navbar-brand">narra</Link> */}
        <div className="collse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login/Register</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li> */}
          {/* <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li> */}
        </ul>
        </div>
      </nav>
    );
  }
}