import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Countdowns!</h1>
        </header>
        <p className="App-intro">
        </p>
<iframe src="http://free.timeanddate.com/countdown/i6jyt1kq/n419/cf100/cm0/cu3/ct0/cs1/cacfff/cr0/ss0/cacfff/cpcfff/pc222/tc333/fs100/tatMOVE.%20IN.%20DAY./tacfff/tptMOVE.%20IN.%20DAY./tpcfff/matSeptember%2020%2C%202019/macfff/mptSeptember%2020%2C%202019/mpcfff/iso2019-09-20T00:00:00/pa0" allowTransparency="true" frameborder="0" width="320" height="125"></iframe>

	  </div>
    );
  }
}

export default App;
