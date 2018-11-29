import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Container from './Container';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Container />
    </div>
  </Router>
);

export default App;
