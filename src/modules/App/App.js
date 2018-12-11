import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Container from './Container';
import recipePage from './recipePage';
import CreateProfile from './CreateProfile';
import AboutPage from './AboutPage';

const App = () => (
  <div className="App">
    <Navbar />
    <Router>
      <div>
        <Route exact path="/" component={Container} />
        <Route exact path="/recipes" component={recipePage} />
        <Route exact path="/createProfile" component={CreateProfile} />
        <Route exact path="/about" component={AboutPage} />
      </div>
    </Router>
  </div>
);

export default App;
