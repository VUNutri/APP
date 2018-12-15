import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import $ from 'jquery';
import KMI from './KMI';
import Blocker from './Blocker';
import DragDrop from './MenuList';

class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectedDay: 0,
      daysCount: 5,
      mealsCount: 3,
      caloriesCount: 3500,
      timeCount: 40,
      blockedItems: [],
      productsList: [],
    };
    this.menuHandler = this.menuHandler.bind(this);
    this.kmiHandler = this.kmiHandler.bind(this);
    this.blockerHandler = this.blockerHandler.bind(this);
  }

  menuHandler(res) {
    this.setState({
      items: res.items,
      selectedDay: res.selectedDay,
    });
  }

  blockerHandler(res) {
    this.setState({
      blockedItems: res.items,
    });
    console.log(this.state.blockedItems, res.items);
  }

  kmiHandler(res) {
    this.setState({
      daysCount: res.daysCount,
      mealsCount: res.mealsCount,
      caloriesCount: res.caloriesCount,
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
                  handler={this.menuHandler}
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
                <KMI
                  handler={this.kmiHandler}
                  daysCount={this.state.daysCount}
                  mealsCount={this.state.mealsCount}
                  caloriesCount={this.state.caloriesCount}
                />
                <br />
                <Blocker
                  handler={this.blockerHandler}
                  blockedItems={this.state.blockedItems}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default CreateProfile;
