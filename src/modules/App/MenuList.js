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
      <div className="menu-day container">
        <h2 className="menu-day-title">{ days[day.dayCount - 1] + ' diena' }</h2>
        <h3 className="menu-day-calories">{ calories } kalorijos</h3>
        <div className="menu-day-meals">
          { day.meals.map((meal, index) => (
            <div className="menu-day-meals-meal container">
              <div className="row">
                <div className="col col-sm-1">
                  <i className="material-icons menu-drag-icon">drag_indicator</i>
                </div>
                <div className="col col-sm-3">
                  <img alt="Meal" className="menu-day-meals-meal-img" src={ meal.image } />
                </div>
                <div className="col col-sm-8">
                  <h3 className="menu-day-meals-meal-title">{ meal.title }</h3>
                  <p className="menu-day-meals-meal-time">
                    <i className="material-icons menu-day-time">query_builder</i>
                    { meal.time }min.
                  </p>
                  <div className="menu-day-meal-input">
                    <input type="number" className="portion-input" value="1" />
                    <p className="portion-calories">porcija(-os)</p>
                  </div>
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
        <div className="container">
          <div className="row">
            <div className="col col-sm-12">
              { this.getDay() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default MenuList;
