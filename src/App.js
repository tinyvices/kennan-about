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
	    <iframe src="https://free.timeanddate.com/countdown/i6jyt1kq/n419/cf100/cm0/cu4/ct0/cs1/cacfff/cr0/ss0/cacfff/cpcfff/pc222/tc333/fs100/szw320/szh135/tatFlorida%20Roadtrip/tacfff/tptFlorida%20Roadtrip/tpcfff/matAugust%2012%2C%202019/macfff/mptAugust%2012%2C%202019/mpcfff/iso2019-08-12T00:00:00/pa0" allowTransparency="true" frameborder="0" width="320" height="135"></iframe>

	    <iframe src="https://free.timeanddate.com/countdown/i6jyt1kq/n419/cf100/cm0/cu4/ct0/cs1/cacfff/cr0/ss0/cacfff/cpcfff/pc222/tc333/fs100/szw320/szh135/tatMommy%20Vietnam%20Trip/tacfff/tptMommy%20Vietnam%20Trip/tpcfff/matSeptember%207%2C%202019/macfff/mptSeptember%207%2C%202019/mpcfff/iso2019-09-07T00:00:00/pa0" allowTransparency="true" frameborder="0" width="320" height="135"></iframe>
	    <iframe src="https://free.timeanddate.com/countdown/i6jyt1kq/n419/cf100/cm0/cu4/ct0/cs1/cacfff/cr0/ss0/cacfff/cpcfff/pc222/tc333/fs100/szw320/szh135/tatMOVE.%20IN.%20DAY.%20/tacfff/tptMOVE.%20IN.%20DAY.%20/tpcfff/matSeptember%2020%2C%202019/macfff/mptSeptember%2020%2C%202019/mpcfff/iso2019-09-20T00:00:00/pa0" allowTransparency="true" frameborder="0" width="320" height="135"></iframe>


	  </div>
    );
  }
}

export default App;
