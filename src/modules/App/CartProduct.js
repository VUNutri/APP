import React from 'react';
import './Container.css';
import './App.css';
import './RecipeDiv.css';
import './CartProduct.css';

const CartProduct = (props) => {
  if (props.description) {
    return (
      <div>
        <li className="list-group-item">
        <div className="menu-day-meals-meal">
              <div className="row">
                <div className="col col-md-4 col-sm-12">
                  <img alt="Meal" className="menu-day-meals-meal-img" src={ props.img } />
                </div>
                <div className="col col-md-6 col-sm-12">
                  <h3 className="menu-day-meals-meal-title">{ props.description }</h3>
                  <p className="menu-day-meals-meal-time">
                    <i className="material-icons menu-day-time">shopping_basket</i>
                    { props.size !== 'vnt' ? props.ammount*100 : props.ammount} {props.size}
                  </p>
                  <p className="menu-day-meals-meal-time">
                    <i className="material-icons menu-day-time">euro_symbol</i>
                    { props.price }
                  </p>
                </div>
              </div>
            </div>
            </li>
      </div>
    );
  } return null;
};

export default CartProduct;
