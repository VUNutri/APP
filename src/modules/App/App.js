import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Container from './Container';
import recipePage from './recipePage';
import MenuList from './MenuList';
import CreateProfile from './CreateProfile';

const App = () => (
  <div className="App">
    <Navbar />
    <Router>
      <div>
        <Route path="/home" component={Container} />
        <Route path="/recipes" component={recipePage} />
        <Route path="/createProfile" component={CreateProfile} />
      </div>
    </Router>
  </div>
);

export default App;
