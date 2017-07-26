import React, { Component } from 'react';
import GetImageButton from './GetImageButton';

const API_KEY = "YsufMlmxBpbmZbBZ1ITvaOESX5ocgzaKBzVDnpTL";

export default class GetImageForm extends Component {
  constructor() {
    super();

    this.state = {
      rover: '',
      camera: '',
      sol: ''
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  _handleChange(event){
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object);
  }

  _handleSubmit(event){
    let rover = this.state.rover;
    let camera = this.state.camera;
    let number = this.state.sol;
    
    const IMG_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${number}&camera=${camera}&api_key=${API_KEY}`;

    fetch(IMG_URL).then((result) => {
      result.json().then((response) => {
        console.log("working?", response);
      })
    })
  }

  render() {
    return (
      <div>
        <form className="inputs flex-center">

          <div>
            <label>Rover</label>
            <select onChange={ this._handleChange } name="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
          </div>

          <div>
            <label>Camera</label>
            <select onChange={ this._handleChange } name="camera" value={ this.state.value }>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          </div>

          <div>
            <label>Martian Sol: 1000-2000</label>
            <input name="sol" type="number" onChange={ this._handleChange } max="2000" min="1000" value={ this.state.value }/>
          </div>

          <div>
            <GetImageButton handleSubmit={ this.handleSubmit }/>
          </div>

        </form>
      </div>
    )
  }
}
