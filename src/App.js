import React, { Component } from 'react';
import './App.css';
import NavHeader from './components/NavHeader.js';
import MINTable from './components/MINTable.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <MINTable />
      </div>
    );
  }
}

export default App;
