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

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    let rover = this.state.rover;
    let camera = this.state.camera;
    let number = this.state.sol;

    const IMG_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${number}&camera=${camera}&api_key=${API_KEY}';
  }

  _handleChange(event){
    console.log(event.target.name);
    console.log(event.target.value);

    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object);
  }

  _handleSubmit(event){
    console.log(this.state);
    console.log("working");
  }

  render() {
    return (
      <div className="flex-center">

        <form onSubmit={ this._handleSubmit }>

          <label>Rover</label>
          <select onChange={ this._handleChange } name="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>

          <label>Camera</label>
          <select onChange={ this._handleChange } name="camera" value={ this.state.value }>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>

          <label>Martian Sol: 1000-2000</label>
          <input name="sol" type="number" onChange={ this._handleChange } max="2000" min="1000" value={ this.state.value }/>

          <input type="submit" value="Get Rover Images" />
        </form>

      </div>
    );
  }
}

export default App;
