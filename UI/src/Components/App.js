import React, { Component } from 'react';
// import { Router, Link } from 'react-router-dom';
// import Routes from './Routes/Routes';
import Movies from './Movies';
import './CSS/App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header>Movie/Show Tracker</header>
          <div className="content">
            <Movies/>
          </div>
          <footer>Thanks for stopping by</footer>
        </div>
    );
  }
}

export default App;
