import React from 'react';
import './Container.css';
import './App.css';
import './RecipeDiv.css';
import ProductDiv from './ProductDiv';
import $ from 'jquery';

class RecipeDiv extends React.Component {

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

  render() {
    const AllProducts = this.props.products.map(list =>
      <ProductDiv {...list} />);
    return (
      <div>
        <div className="card bg-dark text-white">
          <img className="card-img meal-img" src={this.props.image} alt="Patiekalas" />
          <div className="card-img-overlay dark-overlay">
            <h5 className="card-title toUpper">{this.props.title}</h5>
            <p className="card-text text-white">
              {this.renderSwitch(this.props.category)}
            </p>
            <p className="card-text">
              <button type="button" className="btn btn-primary nutriColor" data-toggle="modal" data-target={'#mealModal' + this.props.id}>
              Plačiau
              </button>
            </p>
          </div>
        </div>
        <div className="modal fade" id={"mealModal" + this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="meal-modal modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Apie patiekalą</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <img className="meal-img" src={this.props.image} alt={this.props.title} />
                </div>
                <div className="row">
                  <div className="col col-sm-12">
                    <h3 className="toUpper">{this.props.title}</h3>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col col-md-4">
                    Tipas:
                  </div>
                  <div className="col col-md-8">
                    <span className="badge badge-primary badge nutriColor">{this.renderSwitch(this.props.category)}</span>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col col-md-4">
                    Gaminimo laikas:
                  </div>
                  <div className="col col-md-8">
                    <span className="badge badge-primary badge nutriColor">{this.props.time}min.</span>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col col-md-12">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Kalorijos:
                        <span className="badge badge-primary badge nutriColor">{this.props.calories} cal</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Baltymai:
                        <span className="badge badge-primary badge nutriColor">{this.props.proteins}g</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Angliavandeniai:
                        <span className="badge badge-primary badge nutriColor">{this.props.carbs}g</span>
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
                              {AllProducts}
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
                    {this.props.instructions}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default RecipeDiv;
