import React from 'react';
import axios from 'axios';
import './MenuList.css';
import Const from '../Const/Const';
import ShoppingBag from './ShoppingBag';
import ProductDiv from './ProductDiv';

class MenuList extends React.Component {
  constructor(props) {
    super(props);

    const data = this.props;

    this.state = {
      items: data.items,
      selectedDay: data.selectedDay,
      daysCount: data.daysCount,
      mealsCount: data.mealsCount,
      caloriesCount: data.caloriesCount,
      timeCount: data.timeCount,
      blockedItems: data.blockedItems,
      productsList: data.productsList,
    };

    this.getDay = this.getDay.bind(this);
    this.changeDayShow = this.changeDayShow.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getFoodList = this.getFoodList.bind(this);
    this.refreshMeal = this.refreshMeal.bind(this);
  }

  componentWillMount() {
    const data = this.state;
    const propsData = this.props;

    if (data.items.length < 1) {
      axios.post(`${Const.apiHost}menu/getMenu`, {
        days: data.daysCount,
        meals: data.mealsCount,
        calories: data.caloriesCount,
        time: data.timeCount,
        blockedIngredients: data.blockedItems,
      }).then((res) => {
        this.setState({
          items: res.data,
        });
        propsData.handler({
          items: res.data,
          selectedDay: data.selectedDay,
        });
      }).catch(err => console.log(err));
    }
  }

  componentWillReceiveProps(props) {
    const data = this.state;
    const propsData = this.props;

    if (
      propsData.daysCount !== props.daysCount
      || propsData.mealsCount !== props.mealsCount
      || propsData.timeCount !== props.timeCount
      || propsData.caloriesCount !== props.caloriesCount
      || propsData.blockedItems !== props.blockedItems
    ) {
      console.log('aap', props.blockedItems);
      axios.post(`${Const.apiHost}menu/getMenu`, {
        days: props.daysCount,
        meals: props.mealsCount,
        calories: props.caloriesCount,
        time: props.timeCount,
        blockedIngredients: props.blockedItems,
      }).then((res) => {
        this.setState({
          items: res.data,
        });
        propsData.handler({
          items: res.data,
          selectedDay: data.selectedDay,
        });
      }).catch(err => console.log(err));
    }

    this.setState({
      items: props.items,
      selectedDay: props.selectedDay,
      daysCount: props.daysCount,
      mealsCount: props.mealsCount,
      caloriesCount: props.caloriesCount,
      timeCount: props.timeCount,
      blockedItems: props.blockedItems,
    });
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

  renderSwitch(param) {
    switch(param) {
      case 1:
        return 'Pusryčiai';
      case 2:
        return 'Pietūs';
      case 3:
        return 'Užkandis/desertas';
      default:
        return '';
    }
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
      .then(resp => this.setState({productsList:resp.data}))
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

    if (this.state.items.length < 1) {
      return (<div><p>empty</p></div>)
    }

    const day = this.state.items[this.state.selectedDay];
    let calories = 0;
    for (let i = 0; i < day.meals.length; i += 1) {
      calories += day.meals[i].calories;
    }
    

    return (
      <div className="menu-day">
        <div className="row">
          <div className="col col-md-6">
            <h2 className="menu-day-title">{ days[day.dayCount - 1] + ' diena' }</h2>
            <h3 className="menu-day-calories">{ calories } kalorijos</h3>
          </div>
          <div className="col col-md-4">
            <ShoppingBag clicked={this.getFoodList()} cart={this.state.productsList} />
          </div>
          <div className="col col-md-2" onClick={() => this.refreshDay()} >
            <i className="material-icons menu-drag-icon">refresh</i>
          </div>
        </div>
        <div className="menu-day-meals">
          { day.meals.map((meal, index) => (
            <div className="menu-day-meals-meal">
              <div className="row">
                <div className="col col-md-1 col-sm-1">
                  <i className="material-icons menu-drag-icon" data-toggle="modal" data-target={'#mealModal' + meal.id}>info</i>
                </div>
                <div className="col col-md-3 col-sm-12">
                  <img alt="Meal" className="menu-day-meals-meal-img" src={ meal.image } />
                </div>
                <div className="col col-md-6 col-sm-12">
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
                <div className="col col-md-1 col-sm-1" index={index} onClick={() => this.refreshMeal(index, meal)}>
                  <i className="material-icons menu-drag-icon">refresh</i>
                </div>
                <div className="col col-md-1 col-sm-1" index={index} onClick={() => this.deleteItem(index)}>
                  <i className="material-icons menu-drag-icon">delete</i>
                </div>
              </div>
              <div className="modal fade" id={"mealModal" + meal.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="meal-modal modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">Apie patiekalą</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body" style={{padding: '0 1rem'}}>
                      <div className="row">
                        <img className="meal-img" src={meal.image} alt={meal.title} />
                      </div>
                      <div className="row">
                        <div className="col col-sm-12">
                          <h3 className="toUpper">{meal.title}</h3>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col col-md-4">
                          Tipas:
                        </div>
                        <div className="col col-md-8">
                          <span className="badge badge-primary badge nutriColor">{this.renderSwitch(meal.category)}</span>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col col-md-4">
                          Gaminimo laikas:
                        </div>
                        <div className="col col-md-8">
                          <span className="badge badge-primary badge nutriColor">{meal.time}min.</span>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col col-md-12">
                          <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Kalorijos:
                              <span className="badge badge-primary badge nutriColor">{meal.calories} cal</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Baltymai:
                              <span className="badge badge-primary badge nutriColor">{meal.proteins}g</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                              Angliavandeniai:
                              <span className="badge badge-primary badge nutriColor">{meal.carbs}g</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col col-sm-12">
                          <div className="accordion" id="accordionExample">
                            <div className="card" id="product-card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <button className="btn btn-primary nutriColor" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Produktai
                                  </button>
                                </h5>
                              </div>

                              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                  <ul className="list-group">
                                    {meal.products.map(list => <ProductDiv {...list} />)}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col col-md-12">
                          <h4>Gaminimo instrukcijos:</h4>
                        </div>
                        <div className="col col-md-12">
                          {meal.instructions}
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  refreshDay() {
    const self = this;
    axios.post(`${Const.apiHost}menu/getDailyMenu`, {
      dayCount: this.state.selectedDay + 1,
      meals: this.state.mealsCount,
      calories: this.state.caloriesCount,
      time: this.state.timeCount,
      blockedIngredients: this.state.blockedItems
    }).then( (resp) => {
      const arr = self.state.items;
      arr[self.state.selectedDay] = resp.data;
      self.setState({ items: arr });
    }).catch( err => console.log(err));

  }

  refreshMeal(index, meal) {
    const self = this;
    axios.post(`${Const.apiHost}menu/getDayOneMenu`, {
      category: meal.category,
      calories: this.state.caloriesCount,
      time: this.state.timeCount,
      blockedIngredients: this.state.blockedItems
    }).then( (resp) => {
      const arr = self.state.items;
      arr[self.state.selectedDay].meals[index] = resp.data;
      self.setState({ items: arr });
    }).catch( err => console.log(err));
  }

  changeDayShow(index) {
    return this.setState({ selectedDay: index });
  }

  deleteItem(index) {
    let arr = this.state.items;
    arr[this.state.selectedDay].meals.splice(index, 1);
    this.setState({items: arr });
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
