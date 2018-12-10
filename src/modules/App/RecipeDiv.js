import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import './App.css';
import './RecipeDiv.css';


function RecipeDiv(props) {
  return (
    <div>
      <li className="list-group-item">
        <div className="row">
          <div className="col col-md-3">
            <img src={props.image} alt="Meal" className="meal-img" />
          </div>
          <div className="col col-md-7">
            Pavadinimas: <b>{props.title}</b>
            <br />
            ID: {props.id}
            <br/>
            {props.instructions}
          </div>
          <div className="col col-md-2">
            <button type="button" class="btn btn-primary">Plačiau</button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default RecipeDiv;
