import React, { Component } from 'react';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY = 'YsufMlmxBpbmZbBZ1ITvaOESX5ocgzaKBzVDnpTL';

export default class GetImageForm extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      rover: 'Curiosity',
      camera: 'fhaz',
      sol: '1000'
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  _handleChange(event){
    console.log("fired change", event.target.name);
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object);
    console.log(this.state);
  }

  _handleSubmit(event){
    event.preventDefault();

    const IMG_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${API_KEY}`;

    fetch(IMG_URL).then((result) => {
      result.json().then((response) => {
        console.log('response', response.photos);
        this.setState({
          images: response.photos
        })
      })
    })
  }

  render() {
    let allImages = this.state.images.map((image) => {
      return <ImageDisplay key={ image.id } image={ image } />
    })
    return (
      <div>
        <h1>Mars Rover Images</h1>
        <h5>Select some options to explore Mars!</h5>

        <form className="inputs flex-center">
          <div>
            <label><h6>Rover</h6></label>
            <select className="browser-default black-text" onChange={ this._handleChange } name="rover" value={ this.state.rover }>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
          </div>

          <div>
            <label><h6>Camera</h6></label>
            <select className="browser-default black-text" onChange={ this._handleChange } name="camera" value={ this.state.camera }>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          </div>

          <div className="sol-select">
            <label><h6>Martian Sol: 1000-2000</h6></label>
            <input className="" name="sol" type="number" onChange={ this._handleChange } max="2000" min="1000" value={ this.state.sol }/>
          </div>

          <div>
            <GetImageButton handleSubmit={ this._handleSubmit }/>
          </div>
        </form>


        <div className="images-container">
          { allImages.length > 0 ? allImages : <p className="try-again">No Photos? Try another combination</p> }
        </div>

      </div>
    )
  }
}
