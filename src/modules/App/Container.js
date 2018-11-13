import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Container.css';
import $ from 'jquery';

class Container extends React.Component {
    handleClick() {
            $('#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    }
  
    render() {
      return (
        <Router>
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">

                            <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={this.handleClick}>
                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                <span>Meniu</span>
                            </button>
                            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-align-justify"></i>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Kazkas</a>
                                    </li>
                                    <li claclassNamess="nav-item">
                                        <a className="nav-link" href="#">Kazkas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Kazkas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Kazkas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>


                    Dabar reikia sugalvoti ka cia inpisti

                    
                    </div>

        </Router>
      );
    }
}

export default Container;
