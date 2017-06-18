import React, { Component } from 'react';
import './style.css';
import InputContainer from './container/InputContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>Caesar ciphering:</h3>
            <InputContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;