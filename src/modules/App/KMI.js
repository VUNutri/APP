import React from 'react';
import './KMI.css';

class KMI extends React.Component {
  constructor(props) {
    super(props);

    this.state = { weight: 69, height: 189, age: 45, gender: 'male', active: 'passive', calories: this.props.caloriesCount, daysNumber: this.props.daysCount, mealsNumber: this.props.mealsCount };
    this.heightChange = this.heightChange.bind(this);
    this.weightChange = this.weightChange.bind(this);
    this.ageChange = this.ageChange.bind(this);  
    this.genderChange = this.genderChange.bind(this); 
    this.activeChange = this.activeChange.bind(this);  
    this.daysNumberChange = this.daysNumberChange.bind(this); 
    this.mealsNumberChange = this.mealsNumberChange.bind(this); 
    this.KMI = this.KMI.bind(this);
    this.caloriesCalculator = this.caloriesCalculator.bind(this);
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

  ageChange(e) {
    this.setState({ age: e.target.value });
    e.preventDefault();
  }

  genderChange(e) {
    this.setState({ gender: e.target.value });
  }

  activeChange(e) {
    this.setState({ active: e.target.value });
    e.preventDefault();
  }

  daysNumberChange(e) {
    const num = parseInt(e.target.value);
    this.setState({ daysNumber: num });
    this.props.handler({
      daysCount: num,
      mealsCount: this.state.mealsNumber,
      caloriesCount: this.state.calories,
    });
  }

  mealsNumberChange(e) {
    const num = parseInt(e.target.value);
    this.setState({ mealsNumber: num });
    e.preventDefault();
    this.props.handler({
      daysCount: this.state.daysNumber,
      mealsCount: num,
      caloriesCount: this.state.calories,
    });
  }
  

  KMI() {
    const kmi = this.state.weight / (this.state.height/100) / (this.state.height/100);
    this.setState({ kmi: Math.round(kmi * 100) / 100 });   
  }

  caloriesCalculator() {
    const maleBMR = (13.397 * this.state.weight) + (4.799 * this.state.height) - (5.677 * this.state.age) + 88.362;
    const femaleBMR =  (9.247 * this.state.weight) + (3.098 * this.state.height) - (4.330 * this.state.age) + 447.593;
    let calories;
    if (this.state.gender === 'male') { 
      if (this.state.active === 'passive') {
        calories = maleBMR * 1.2;
        this.setState({ calories: Math.round(calories) });
      }
      else if (this.state.active === 'mild') {
        calories = maleBMR * 1.375;
        this.setState({ calories: Math.round(calories) });
      }
      else if (this.state.active === 'moderate') {
        calories = maleBMR * 1.55;
        this.setState({ calories: Math.round(calories) });
      }
      else if (this.state.active === 'heavy') {
        calories = maleBMR * 1.7;
        this.setState({ calories: Math.round(calories) });
      }
      else if (this.state.active === 'extreme') {
        calories = maleBMR * 1.9;
        this.setState({ calories: Math.round(calories) });
      }
    }
    else if (this.state.gender === 'female') { 
      if (this.state.active === 'passive') {
        calories = femaleBMR * 1.2;
        this.setState({ calories: Math.round(calories) });
      }
      else if (this.state.active === 'mild') {
        calories = femaleBMR * 1.375;
        this.setState({ calories: Math.round(calories) });
      }
      else if (this.state.active === 'moderate') {
        calories = femaleBMR * 1.55;
        this.setState({ calories: Math.round(calories) });
      }
      else if (this.state.active === 'heavy') {
        calories = femaleBMR * 1.7;
        this.setState({ calories: Math.round(calories) });
      }
      else if (this.state.active === 'extreme') {
        calories = femaleBMR * 1.9;
        this.setState({ calories: Math.round(calories) });
      }
    }
    return calories;
  }

  submit(e) {
    e.preventDefault();
    const cals = Math.round(this.caloriesCalculator());
    this.props.handler({
      daysCount: this.state.daysNumber,
      mealsCount: this.state.mealsNumber,
      caloriesCount: cals,
    });
  }

  render() {
    return (
      <div className="col col-sm-12">
        <button type="button" id="modalOpen" className="modalOpen button1" data-toggle="modal" data-target="#myModal">Kalorijų skaičiuoklė</button>     
        <div id="myModal" className="modal">      
          <div className="modal-content">
            <div className="modal-header">        
              <h3>Kalorijų dienos normos skaičiuoklė</h3>
            </div>
              <div className="modal-body">
                <form onSubmit={this.submit}>
                  <div className="row text-left">
                    <div className="col col-md-4">
                      Pažymėkite savo lytį:
                    </div>
                    <div className="col col-md-4">
                      <input
                        type="radio"
                        value="male"
                        checked={this.state.gender === 'male'}
                        onChange={this.genderChange}
                        name="gender"
                        className="radioButton"
                      />
                      Vyras
                    </div>
                    <div className="col col-md-4">
                      <input
                        type="radio"
                        value="female"
                        checked={this.state.gender === 'female'}
                        onChange={this.genderChange}
                        name="gender"
                        className="radioButton"
                      />
                      Moteris
                    </div>
                  </div>
                  <br />
                  <div className="row text-left">
                    <div className="col col-md-4">
                      Įveskite savo ūgį:
                    </div>
                    <div className="col col-md-8">
                      <input type="text" className="input" value={this.state.height} onChange={this.heightChange} />
                      cm
                    </div>
                  </div>
                  <br />
                  <div className="row text-left">
                    <div className="col col-md-4">
                      Įveskite savo svorį:
                    </div>
                    <div className="col col-md-8">
                      <input type="text" className="input" value={this.state.weight} onChange={this.weightChange} />
                      kg
                    </div>
                  </div>
                  <br />
                  <div className="row text-left">
                    <div className="col col-md-4">
                      Įveskite savo amžių:
                    </div>
                    <div className="col col-md-8">
                      <input type="text" className="input" value={this.state.age} onChange={this.ageChange} />
                       m
                    </div>
                  </div>
                  <br />
                  <div className="row text-left">
                    <div className="col col-md-4">
                      Fizinis aktyvumas:
                    </div>
                    <div className="col col-md-8">
                      <select onChange={this.activeChange} value={this.state.active}>
                        <option value="passive">Pasyvus</option>
                        <option value="mild">Lengvai aktyvus</option>
                        <option value="moderate">Vidutiniškai aktyvus</option>
                        <option value="heavy">Labai aktyvus</option>
                        <option value="extreme">Ypač aktyvus</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row text-left">
                    <div className="col col-md-12">
                      <span>Rekomenduojama kalorijų dienos norma yra: <b>{this.state.calories}</b> kalorijos</span>
                    </div>
                  </div>
                  <br />
                  <input type="submit" value="Skaičiuoti" className="count button2" />
                  <br />
                  <br />
                </form>
              </div>
            <div className="modal-footer">
              <button type="button" className="modalClose button2" data-dismiss="modal">Uždaryti</button>
            </div>
          </div> 
        </div>
        <br />
        <br />
        <p>Dienos</p>
        <input type="range" name="daysSlider" className="slider" min="1" max="7" value={this.state.daysNumber} onChange={this.daysNumberChange} />
        <label for="daysSlider">{this.state.daysNumber}</label>
        <p>Valgymų kartai</p>
        <input type="range" name="mealsSlider" className="slider" min="1" max="7" value={this.state.mealsNumber} onChange={this.mealsNumberChange} />
        <label for="mealsSlider">{this.state.mealsNumber}</label>
      </div>
    );
  }
}

export default KMI;