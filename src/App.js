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

		<iframe src="http://free.timeanddate.com/countdown/i6jyt1kq/n419/cf100/cm0/cu3/ct0/cs1/ca0/cr0/ss0/cacfff/cpcfff/pc222/tc333/fs100/szw320/szh135/tatLynn%20-%20Earliest%20Reenlistment%20(x5)/tacfff/tptLynn%20-%20Earliest%20Reenlistment%20(x5)/tpcfff/matMar%209%2C%202019/macfff/mptMar%209%2C%202019/mpcfff/iso2019-03-09T00:00:00/pa0" allowTransparency="true" frameborder="0" width="320" height="135"></iframe>

		<iframe src="http://free.timeanddate.com/countdown/i6jyt1kq/n419/cf100/cm0/cu3/ct0/cs1/cacfff/cr0/ss0/cacfff/cpcfff/pc222/tc333/fs100/szw320/szh135/tatTy%20-%20Terminal%20LV%20Starts!/tacfff/tptTy%20-%20Terminal%20LV%20Starts!/tpcfff/matMar%2027%2C%202019/macfff/mptMar%2027%2C%202019/mpcfff/iso2019-03-27T00:00:00/pa0" allowTransparency="true" frameborder="0" width="320" height="135"></iframe>

		<iframe src="http://free.timeanddate.com/countdown/i6jyt1kq/n419/cf100/cm0/cu3/ct0/cs1/ca0/cr0/ss0/cacfff/cpcfff/pc222/tc333/fs100/szw320/szh135/tatLynn%20-%206yr%20Reenlistment%20(x6)/tacfff/tptLynn%20-%206yr%20Reenlistment%20(x6)/tpcfff/matMay%209%2C%202019/macfff/mptMay%209%2C%202019/mpcfff/iso2019-05-09T00:00:00/pa0" allowTransparency="true" frameborder="0" width="320" height="135"></iframe>

	  </div>
    );
  }
}

export default App;
