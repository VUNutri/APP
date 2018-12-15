import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userLoggedIn:false };
  }

  render() {
    return (
      <Router>
        <nav id="sidebar">
          <div className="sidebar-header">
            <img alt="Nutri logo" src={logo} className="navLogo" />
          </div>
          <ul className="list-unstyled components">
            <li>
              <a href="/">PAGRINDINIS</a>
            </li>
            <li>
              <a href="/recipes">RECEPTAI</a>
            </li>
            <li>
              <a href="/about">APIE NUTRI</a>
            </li>
          </ul>
          <ul className="list-unstyled CTAs">
            <li>
              <a href="#" className="navLogin">PRISIJUNGTI</a>
            </li>
            <li>
              <a href="#" className="navRegister">REGISTRUOTIS</a>
            </li>
          </ul>
        </nav>
      </Router>);
  }
}

export default Navbar;
