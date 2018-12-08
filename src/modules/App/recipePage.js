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
              className="btn navToggleBtn"
              onClick={this.handleClick}
            >
              <i className="material-icons">vertical_split</i>
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
