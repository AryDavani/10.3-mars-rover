import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <GetImageForm />
      </div>
    );
  }
}

export default App;
