import React from 'react';
import axios from 'axios';

import data from './data.json';
import './MenuList.css';
import Const from '../Const/Const';
import { copyFileSync } from 'fs';

class MenuList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: data, selectedDay: 0, daysCount: 7, mealsCount: 4, caloriesCount: 3500, timeCount: 40, blockedItems: [] };

    this.getDay = this.getDay.bind(this);
    this.changeDayShow = this.changeDayShow.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getFoodList = this.getFoodList.bind(this);
  }

  componentWillMount() {
    const self = this;
    axios.post(`${Const.apiHost}menu/getMenu`, {
      days: this.state.daysCount,
      meals: this.state.mealsCount,
      calories: this.state.caloriesCount,
      time: this.state.timeCount,
      blockedIngredients: this.state.blockedItems
    }).then(res => {
      self.setState({ items: res.data })
    }).catch(err => console.log(err));
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

  deleteItem(index) {
    let arr = this.state.items;
    arr[this.state.selectedDay].meals.splice(index, 1);
    this.setState({items: arr });
  }

  getFoodList() {
    const items = [];

    this.state.items.map((day, index) => {
      day.meals.map((meal, index) => {
        meal.products.map((ingredient, index) => {
          let found = false;
          for (let i = 0; i < items.length; i += 1) {
            if (items[i].title === ingredient.title) {
              if (ingredient.size !== 'vnt') {
                items[i].ammount += ingredient.value * 100;
              } else {
                items[i].ammount += ingredient.value;
              }
              found = true;
            }
          }
          if (!found) {
            items.push({ title: ingredient.title, size: ingredient.size, ammount: ingredient.value * 100 });
          }
        });
      });
    });

    axios.post(Const.scraperHost, { products: items })
      .then(resp => console.log(resp.data))
      .catch(err => console.log(err));
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
        <div className="row">
          <div className="col col-md-10">
            <h2 className="menu-day-title">{ days[day.dayCount - 1] + ' diena' }</h2>
            <h3 className="menu-day-calories">{ calories } kalorijos</h3>
          </div>
          <div className="col col-md-2">
            <i className="material-icons menu-drag-icon">refresh</i>
          </div>
        </div>
        <div className="menu-day-meals">
          { day.meals.map((meal, index) => (
            <div className="menu-day-meals-meal">
              <div className="row">
                <div className="col col-md-4 col-sm-12">
                  <img alt="Meal" className="menu-day-meals-meal-img" src={ meal.image } />
                </div>
                <div className="col col-md-7 col-sm-12">
                  <h3 className="menu-day-meals-meal-title">{ meal.title }</h3>
                  <p className="menu-day-meals-meal-time">
                    <i className="material-icons menu-day-time">query_builder</i>
                    { meal.time } min.
                  </p>
                  <div className="menu-day-meal-input">
                    <input type="number" className="portion-input" min="1" max="10" />
                    <p className="portion-calories">porcija(-os)</p>
                  </div>
                </div>
                <div className="col col-md-1 col-sm-1" index={index} onClick={() => this.deleteItem(index)}>
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
          <button onClick={this.getFoodList}>Click</button>
      </div>
    );
  }
}


export default MenuList;
