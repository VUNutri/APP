import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import data from './data.json';
import $ from 'jquery';
import KMI from './KMI';
import Blocker from './Blocker';
import DragDrop from './MenuList';
import ShoppingBag from './ShoppingBag';

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], selectedDay: 0, daysCount: 7, mealsCount: 4, caloriesCount: 3500, timeCount: 40, blockedItems: [], productsList: [] };
    this.handler = this.handler.bind(this);
  }

  handler(res) {
    this.setState({
      items: res.items,
      selectedDay: res.selectedDay,
      daysCount: res.daysCount,
      mealsCount: res.mealsCount,
      caloriesCount: res.caloriesCount,
      timeCount: res.timeCount,
      blockedItems: res.blockedItems,
      productsList: res.productsList
    });
  }

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
                <DragDrop
                  handler={this.handler}
                  items={this.state.items}
                  daysCount={this.state.daysCount}
                  mealsCount={this.state.mealsCount}
                  selectedDay={this.state.selectedDay}
                  caloriesCount={this.state.caloriesCount}
                  timeCount={this.state.timeCount}
                  blockedItems={this.state.blockedItems}
                  productsList={this.state.productsList}
                />
              </div>
              <div className="col col-sm-12 col-md-4">
                <KMI />
                <br />
                <Blocker />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default CreateProfile;
