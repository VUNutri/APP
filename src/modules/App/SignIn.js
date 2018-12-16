import React from 'react';
import './KMI.css';

class SignIn extends React.Component {
  render() {
      return(
        <div className="col col-sm-12">
        <button type="button" id="modalOpen" className="modalOpen button1 " data-toggle="modal" data-target="#signInModal">Prisijungti</button>     
        <div id="signInModal" className="modal">      
          <div className="modal-content">
            <div className="modal-header">        
              <h3>Prisijungimas</h3>
            </div>
              <div className="modal-body">
                  <div className="row text-left">
                  <div className="col col-md-4">
                      Prisijungimo vardas:
                    </div>
                    <div className="col col-md-8">
                      <input type="text" className="input" />
                    </div>
                  </div>
                  <br />
                  <div className="row text-left">
                    <div className="col col-md-4">
                      Slapažodis:
                    </div>
                    <div className="col col-md-8">
                      <input type="text" className="input" />
                    </div>
                  </div>
                  <br/>
                  <button type='button' className='button1'>Prisijungti</button>
              </div>
            <div className="modal-footer">
              <button type="button" className="modalClose button2" data-dismiss="modal">Uždaryti</button>
            </div>
          </div> 
        </div>
      </div>
        );
    }
}

export default SignIn;