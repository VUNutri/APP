import React from 'react';
import './Container.css';
import './App.css';
import './RecipeDiv.css';

const CartProduct = (props) => {
  return (
    <div>
      <li className="list-group-item">{props.description}</li>
    </div>
  );
};

export default CartProduct;
