import React, { Component } from 'react';
import './App.css';
import NavHeader from './components/NavHeader.js';
import MINTable from './components/MINTable.js';
import HelpModal from './components/HelpModal.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      modal: false
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="App">
        <HelpModal isOpen={this.state.modal} toggle={this.toggleModal} />
        <NavHeader toggleModal={this.toggleModal}/>
        <MINTable />
      </div>
    );
  }
}

export default App;
