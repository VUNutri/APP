import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import './App.css';
import $ from 'jquery';
import RecipeDiv from './RecipeDiv';


class recipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meals: [] };
  }

  handleClick() {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }

  componentDidMount() {
    axios.get(`https://cors.io/?http://35.177.42.215:8888/v1/api/recipes/getAll`)
      .then((res) => {
        const meals = res.data;
        this.setState({ meals });
      });

  }

  render()
  {
    const allMeals = this.state.meals.map((meal,index) =>
      <RecipeDiv title={meal.title} id={meal.id} image={meal.image} instructions={meal.instructions} />
    );
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
        <ul className="list-group">
          {allMeals}
        </ul>
      </div>
    )
  }
}

export default recipePage;
