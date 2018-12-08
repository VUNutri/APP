import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import './App.css';
import $ from 'jquery';
import RecipeDiv from './RecipeDiv';
import vegan from '../img/vegan.png';

class recipePage extends React.Component {

  handleClick() {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }

  render ()
  {
    return (
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-info"
              onClick={this.handleClick}
            >
              <span
                className="glyphicon glyphicon-search"
                aria-hidden="true"
              />
              <span>Meniu</span>
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify" />
            </button>

          </div>
        </nav>
        <h1>Receptai</h1>
        <RecipeDiv />
      </div>
    )
  }
}

export default recipePage;
