import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import $ from 'jquery';
import veganLogo from '../img/vegan.png';
import vegetarianLogo from '../img/vegetarian.png';
import gurmanLogo from '../img/gurman.png';
import meatLogo from '../img/meat.png';
import sweetsLogo from '../img/sweet.png';
import snacksLogo from '../img/snacks.png';

class Container extends React.Component {
  handleClick() {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }

  render() {
    return (
      <Router>
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn navToggleBtn"
                onClick={this.handleClick}
              >
                <i className="material-icons">vertical_split</i>
              </button>
            </div>
          </nav>
          <div className="card">
            <div className="card-header">
              SVEIKI ATVYKĘ!
            </div>
            <div className="card-body">
              <h5 className="card-title">VU NUTRI - KĄ MES SIŪLOME?</h5>
              <p className="card-text">Sudarykite savo savaitės patiekalų pasirinkimą ir mes visą kitą atliksime už Jus!</p>
              <a href="#" className="btn navToggleBtn">Sužinoti daugiau</a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={veganLogo} alt="Vegan"/>
                <div className="card-body">
                  <p className="card-text">Veganiški patiekalai</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={vegetarianLogo} alt="Vegetarian"/>
                <div className="card-body">
                  <p className="card-text">Vegetariški patiekalai</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={gurmanLogo} alt="Gurman"/>
                <div className="card-body">
                  <p className="card-text">Gurmaniški patiekalai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={sweetsLogo} alt="Sweets"/>
                <div className="card-body">
                  <p className="card-text">Saldumynai</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={meatLogo} alt="Meat"/>
                <div className="card-body">
                  <p className="card-text">Mėsos mylėtojams</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card">
                <img className="card-img-top" src={snacksLogo} alt="Snacks"/>
                <div className="card-body">
                  <p className="card-text">Užkandžiai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Container;
