import React from 'react';
import './Container.css';
import './App.css';
import $ from 'jquery';

class ShoppingBag extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: this.props.cart };
  }

  render() {
    return (
      <div>
        <button type="button" id="modalOpen" className="btn btn-primary nutriColor button1 modalOpen" data-toggle="modal" data-target="#shoppingModal">
          <i className="material-icons">
          shopping_cart
          </i>
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
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default ShoppingBag;
