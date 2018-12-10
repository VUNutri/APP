import React from 'react';

import data from './data.json';
import './MenuList.css';

class MenuList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: data, selectedDay: 0 };

    this.getDay = this.getDay.bind(this);
    this.changeDayShow = this.changeDayShow.bind(this);
  }

  changeDayShow(index) {
    return this.setState({ selectedDay: index });
  }

  getDaysList() {
    return (
      <ul className="days-count-list">
      { this.state.items.map((day, index) => (
        <li className={"days-count-list-item " + (this.state.selectedDay === index ? 'selected-day' : '')} onClick={() => this.changeDayShow(index)}>{index + 1} diena</li>
      ))}
      </ul>
    );
  }

  getDay() {
    const days = [
      'Pirma',
      'Antra',
      'Trečia',
      'Ketvirta',
      'Penkta',
      'Šešta',
      'Septinta',
    ];

    const day = this.state.items[this.state.selectedDay];
    let calories = 0;
    for (let i = 0; i < day.meals.length; i += 1) {
      calories += day.meals[i].calories;
    }

    return (
      <div className="menu-day">
        <h2 className="menu-day-title">{ days[day.dayCount - 1] + ' diena' }</h2>
        <h3 className="menu-day-calories">{ calories } kalorijos</h3>
        <div className="menu-day-meals">
          { day.meals.map((meal, index) => (
            <div className="menu-day-meals-meal">
              <div className="row">
                <div className="col col-md-1 col-sm-1">
                  <i className="material-icons menu-drag-icon">drag_indicator</i>
                </div>
                <div className="col col-md-3 col-sm-11">
                  <img alt="Meal" className="menu-day-meals-meal-img" src={ meal.image } />
                </div>
                <div className="col col-md-7 col-sm-12">
                  <h3 className="menu-day-meals-meal-title">{ meal.title }</h3>
                  <p className="menu-day-meals-meal-time">
                    <i className="material-icons menu-day-time">query_builder</i>
                    { meal.time }min.
                  </p>
                  <div className="menu-day-meal-input">
                    <input type="number" className="portion-input" min="0" max="10" />
                    <p className="portion-calories">porcija(-os)</p>
                  </div>
                </div>
                <div className="col col-md-1 col-sm-1">
                  <i className="material-icons menu-drag-icon">delete</i>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="menuContainer">
        {this.getDaysList()}
          <div className="row">
            <div className="col col-sm-12">
              { this.getDay() }
            </div>
          </div>
      </div>
    );
  }
}


export default MenuList;
