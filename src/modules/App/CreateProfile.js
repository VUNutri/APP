import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import $ from 'jquery';
import KMI from './KMI';
import Blocker from './Blocker';
import DragDrop from './MenuList';
import ShoppingBag from './ShoppingBag';

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
              <div className="col col-md-8">
                <DragDrop />
              </div>
              <div className="col col-md-4">
                <KMI />
                <br />
                <Blocker />
                <br />
                <ShoppingBag />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default CreateProfile;
