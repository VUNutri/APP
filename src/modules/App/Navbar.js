import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userLoggedIn:false };
  }

  render() {
    return (
        <nav id="sidebar">
          <div className="sidebar-header">
            <img alt="Nutri logo" src={logo} className="navLogo" />
          </div>
          <ul className="list-unstyled components">
            <li>
              <Link to="/">PAGRINDINIS</Link>
            </li>
            <li>
              <Link to="/recipes">RECEPTAI</Link>
            </li>
            <li>
              <Link to="/about">APIE NUTRI</Link>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;
