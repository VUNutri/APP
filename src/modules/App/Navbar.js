import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';
import SignIn from './SignIn';

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
<<<<<<< HEAD
          <ul className="list-unstyled CTAs">
            <li>
          <SignIn />
            </li>
            <li>
              <a href="#" className="navRegister">REGISTRUOTIS</a>
            </li>
          </ul>
=======
>>>>>>> f1b775c238807f7ff00a374df69e4dcdf1c7d98b
        </nav>
        
    );
  }
}

export default Navbar;
