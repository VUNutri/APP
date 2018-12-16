import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import recipePage from './recipePage';
import CreateProfile from './CreateProfile';
import AboutPage from './AboutPage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={CreateProfile} />
        <Route path="/recipes" component={recipePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
