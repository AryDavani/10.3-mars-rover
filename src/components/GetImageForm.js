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
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object);
  }

  _handleSubmit(event){
    event.preventDefault();

    let rover = this.state.rover;
    let camera = this.state.camera;
    let number = this.state.sol;

    const IMG_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${number}&camera=${camera}&api_key=${API_KEY}`;

    fetch(IMG_URL).then((result) => {
      result.json().then((response) => {
        this.setState({
          images: response.photos
        })
        console.log(response.photos);
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
        <form className="inputs flex-center">
          <div>
            <label>Rover</label>
            <select onChange={ this._handleChange } name="rover" value={this.state.rover}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
          </div>

          <div>
            <label>Camera</label>
            <select onChange={ this._handleChange } name="camera" value={ this.state.camera }>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          </div>

          <div>
            <label>Martian Sol: 1000-2000</label>
            <input name="sol" type="number" onChange={ this._handleChange } max="2000" min="1000" value={ this.state.sol }/>
          </div>
        </form>

        <GetImageButton handleSubmit={ this._handleSubmit }/>

        <div className="images-container">
          { allImages }
        </div>

      </div>
    )
  }
}
