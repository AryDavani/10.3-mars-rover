import React, { Component } from 'react';
import '../styles/App.css';

const API_KEY = "YsufMlmxBpbmZbBZ1ITvaOESX5ocgzaKBzVDnpTL";


class App extends Component {
  constructor(){
    super();

    this.state = {
      rover: '',
      camera: '',
      sol: ''
    }

    let rover = this.state.rover;
    let camera = this.state.camera;
    let number = this.state.sol;

    const IMG_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${number}&camera=${camera}&api_key=${API_KEY}';
  }

  render() {
    return (
      <div className="flex-center">

        <form onSubmit={ this._handleSubmit }>

          <label htmlFor="rover">Rover</label>
          <select onChange={ this._handleChange } id="rover" value={ this.state.value }>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>

          <label htmlFor="camera">Camera</label>
          <select onChange={ this._handleChange } id="camera" value={ this.state.value }>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>

          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={ this._handleChange } max="2000" min="1000" value={ this.state.value }/>

          <input type="submit" onChange={ this._handleChange} value="Get Rover Images" />
        </form>

      </div>
    );
  }
}

export default App;
