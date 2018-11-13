import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';

const Navbar = () => (
  <Router>
            <nav id="sidebar">
            <div className="sidebar-header">
                <img src={logo} className="navLogo"/>
            </div>

            <ul className="list-unstyled components">
                <p>MENIU</p>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">MANO SAVAITĖ</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Pirmadienis</a>
                        </li>
                        <li>
                            <a href="#">Antradienis</a>
                        </li>
                        <li>
                            <a href="#">Trečiadienis</a>
                        </li>
                        <li>
                            <a href="#">Ketvirtadienis</a>
                        </li>
                        <li>
                            <a href="#">Penktadienis</a>
                        </li>
                        <li>
                            <a href="#">Šeštadienis</a>
                        </li>
                        <li>
                            <a href="#">Sekmadienis</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">APIE NUTRI</a>
                </li>
                <li>
                    <a href="#">RECEPTAI</a>
                </li>
                <li>
                    <a href="#">KONTAKTAI</a>
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
  </Router>
);

export default Navbar;
