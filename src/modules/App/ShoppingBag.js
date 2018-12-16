import React from 'react';
import './Container.css';
import './App.css';
import axios from 'axios';
import Const from '../Const/Const';
import CartProduct from './CartProduct';

class ShoppingBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], items: this.props.items };
    this.getFoodList = this.getFoodList.bind(this);
  }

  componentWillReceiveProps(props) {
    if (this.props.items !== props.items) {
      this.setState({ items: props.items });
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
      .then((resp) => {
        console.log(resp.data);
        this.setState({ cart:resp.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    let CartList;
    if (this.state.cart.length < 1) {
      CartList = (<div>Lukterkit, apsipirkinėjame Barboroje :)</div>);
    } else {
      CartList = this.state.cart.map(product => <CartProduct {...product} />);
    }
    return (
      <div>
        <button type="button" id="modalOpen" onClick={this.getFoodList} style={{margin:'1.2rem'}} className="btn btn-primary nutriColor button1 modalOpen" data-toggle="modal" data-target="#shoppingModal">
          Produktų krepšelis
        </button>
        <div className="modal fade" id="shoppingModal" tabIndex="-1" role="dialog" aria-labelledby="shoppingModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="meal-modal modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="shoppingModalLabel">Produktų krepšelis</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {CartList}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary nutriColor">Generuoti PDF</button>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default ShoppingBag;
