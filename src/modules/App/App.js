import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Container from './Container';
import KMI from './KMI'

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Container />
      <KMI />
    </div>
  </Router>
);

export default App;
