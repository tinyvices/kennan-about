import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const user = 'ty'
const site = 'kennan.io'

class App extends Component {
  render() {
    return (
      <div className="App">
	<img src={logo} className="App-logo" alt="logo" />
	<br />
	Contact me: <a href={"mailto:" + user + "@" + site}>{user}@{site}</a> 
      </div>
    );
  }
}

export default App;
