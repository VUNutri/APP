import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './KMI.css';

class KMI extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weight: null, height: null, kmi: null};
    this.heightChange = this.heightChange.bind(this);
    this.weightChange = this.weightChange.bind(this);  
    this.KMI = this.KMI.bind(this);
    this.submit = this.submit.bind(this);
  }  

  heightChange(e) {
    this.setState({ height: e.target.value });
    e.preventDefault();
  }

  weightChange(e) {
    this.setState({ weight: e.target.value });
    e.preventDefault();
  }

  KMI() {
    const kmi = this.state.weight / (this.state.height/100) / (this.state.height/100);
    this.setState({ kmi: Math.round(kmi * 100) / 100 });   
  }

  submit(e) {
    e.preventDefault();
    this.KMI();
  }

  render() {
    return (
      <Router>
        <div>
          <button type="button" id="modalOpen" className="modalOpen button1" data-toggle="modal" data-target="#myModal">KMI</button>     
          <div id="myModal" className="modal">      
            <div className="modal-content">
              <div className="modal-header">        
                <h2>Kūno masės indekso skaičiuoklė</h2>
              </div>
              <div className="modal-body">
                <form onSubmit={this.submit}>
                  <br/>
                  <p>Įveskite savo ūgį: <input id="height" type="text" value={this.state.height} onChange={this.heightChange}/> cm</p>                       
                  <p>Įveskite savo svorį: <input id="weight" type="text" value={this.state.weight} onChange={this.weightChange}/> kg</p> 
                  <input type="submit" value="Skaičiuoti" className="count button2"/>
                  <br/>
                  <br/>
                  <p>Jūsų kūno masės indeksas yra: {this.state.kmi}</p>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="modalClose button2" data-dismiss="modal">Uždaryti</button>
              </div>
            </div> 
          </div>
        </div>
      </Router>
    );
  }
}

export default KMI;