import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import $ from 'jquery';
import KMI from './KMI';
import Blocker from './Blocker';
import DragDrop from './MenuList';

class CreateProfile extends React.Component {
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
          <div>
            <div className="row">
              <div className="col col-md-6">
                <DragDrop />
              </div>
              <div className="col col-md-6">
                <Blocker />
              </div>
            </div>
            <div className="row">
              <KMI />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default CreateProfile;
