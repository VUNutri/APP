import React from 'react';
import './Container.css';
import './App.css';
import './Navbar.css';

const ProductDiv = (props) => {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="row" style={{width:"100%"}}>
          <div className="col col-md-3">
            <span className="toUpper">{props.title}</span>
          </div>
          <div className="col col-md-9">
            <div className="row">Kiekis: {props.size!=='vnt' ? props.value*100 : props.value} {props.size}</div>
            <div className="row">Kalorijos: {props.calories} cal</div>
            <div className="row">Angliavandeniai: {props.carbs} g</div>
            <div className="row">Baltymai: {props.proteins} g</div>
          </div>
        </div>
      </li>
    </div>);
};

export default ProductDiv;
