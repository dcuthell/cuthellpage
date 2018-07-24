import React, { Component } from 'react';
import './App.css';


import Router from './components/Router/index.js';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
				<NavBar/>
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;
