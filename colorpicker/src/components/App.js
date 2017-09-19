import React, { Component } from 'react';
import logo from '../images/logo-symbol.svg';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="Header">
          <img src={logo} className="App-logo" alt="logo"/>
          <SearchBar />
        </nav>
        <div className="main">
          <Sidebar/>
          <div className="yield">
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
