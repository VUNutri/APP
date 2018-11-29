import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './KMI.css';

const KMI = () => (
    <Router>
        <div>
            <button id="myBtn" className="myBtn button2" data-toggle="modal" data-target="#myModal">KMI</button>     
            <div id="myModal" className="modal">      
                <div className="modal-content">
                    <div className="modal-header">        
                        <h2>Kūno masės indekso skaičiuoklė</h2>
                    </div>
                    <div className="modal-body">
                        <p>Some text </p>
                        <p>Some text </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="close button1" data-dismiss="modal">Uždaryti</button>
                    </div>
                </div> 
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </Router>
);

export default KMI;