import React from 'react';
import './Container.css';
import './App.css';
import './Navbar.css';
import $ from 'jquery';
import logo from '../img/logo.png';

function handleClick() {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }
const AboutPage = () => {
  return (
    <div>
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn navToggleBtn"
              onClick={handleClick}
            >
              <i className="material-icons">vertical_split</i>
            </button>
          </div>
        </nav>
        <div className="jumbotron">
          <img src={logo} style={{ width: '20%' }} alt="VU Nutri logotipas" />
          <h1 className="display-4">Apie VU Nutri</h1>
          <p className="lead">Mūsų produktas suteikia galimybę vartotojams lengvai ir greitai susidaryti savo norimą maisto planą nustatytam laikotarpiui. Tai padės platus patiekalų ir produktų spektras, bei kalorijų skaičiuoklė.</p>
          <hr className="my-4" />
          <p>Projektas sukurtas VU Informacinių sistemų inžinerijos pirmakursių</p>
        </div>
      </div>
    </div>);
};

export default AboutPage;
