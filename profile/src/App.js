import React, { Component } from 'react';
import logo from './RedMH-Logo.png';
import './App.css';
import Header from './Header'
import Footer from './Footer'
// import Projects from './Projects'
import Navigation from './Navigation'

class App extends Component {

  state = {

  }
  
  render() {
    return (
      <div className="App">
        <Header src={logo}/>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
