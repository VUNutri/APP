import React from 'react';
import './Container.css';
import './App.css';
import './RecipeDiv.css';

class RecipeDiv extends React.Component {
  renderSwitch(param) {
    switch(param) {
      case 1:
        return 'Pusryčių patiekalas';
      case 2:
        return 'Pietų patiekalas';
      case 3:
        return 'Užkandis/desertas';
      default:
        return '';
    }
  }

  render() {
    return (
      <div>
        <div className="card bg-dark text-white">
          <img className="card-img meal-img" src={this.props.image} alt="Patiekalas" />
          <div className="card-img-overlay dark-overlay">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text text-white">
              {this.renderSwitch(this.props.category)}
            </p>
            <p className="card-text">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#mealModal' + this.props.id}>
              Plačiau
              </button>
            </p>
          </div>
        </div>
        <div className="modal fade" id={"mealModal" + this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
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
                  <div className="col col-md-4">
                    Pavadinimas:
                  </div>
                  <div className="col col-md-8">
                    <b>{this.props.title}</b>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col col-md-4">
                    Tipas:
                  </div>
                  <div className="col col-md-8">
                    <b>{this.renderSwitch(this.props.category)}</b>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col col-md-4">
                    Gaminimo laikas:
                  </div>
                  <div className="col col-md-8">
                    <b>{this.props.time}min.</b>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col col-md-4">
                    Maistinės vertės:
                  </div>
                  <div className="col col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Kalorijos:
                        <span className="badge badge-primary badge-pill">{this.props.calories} cal</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Baltymai:
                        <span className="badge badge-primary badge-pill">{this.props.proteins}g</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Angliavandeniai:
                        <span className="badge badge-primary badge-pill">{this.props.carbs}g</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col col-md-4">
                    Gaminimo instrukcijos:
                  </div>
                  <div className="col col-md-8">
                    <b>{this.props.instructions}</b>
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
