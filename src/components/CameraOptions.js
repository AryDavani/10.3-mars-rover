import React, {Component} from 'react';

export default function CameraOptions(props) {
  if (props.state.rover === 'Curiosity') {
    return (
      <select className="browser-default black-text" name="camera" value={ props.state.camera } onChange={ props.handleChange }>
        <option value="fhaz">Front Hazard Avoidance Camera</option>
        <option value="rhaz">Rear Hazard Avoidance Camera</option>
        <option value="mast">Mast Camera</option>
        <option value="chemcam">Chemistry and Camera Complex</option>
        <option value="mahli">Mars Hand Lens Imager</option>
        <option value="mahli">Mars Hand Lens Imager</option>
      </select>
    )
  } else if (props.state.rover === 'Opportunity') {
    return (
      <select className="browser-default black-text" name="camera" value={ props.state.camera } onChange={ props.handleChange }>
        <option value="Curiosity">asdlkfja;sldfj</option>
        <option value="Opportunity">;lsjdfla</option>
        <option value="Spirit">ljasd;fjl;asfj</option>
      </select>
    )
  } else if (props.state.rover === 'Spirit') {
    return (
      <select className="browser-default black-text" name="camera" value={ props.state.camera } onChange={ props.handleChange }>
        <option value="Curiosity">dddddddd</option>
        <option value="Opportunity">aaaaaaaaaa</option>
        <option value="Spirit">ggggggggg</option>
      </select>
    )
  }
}
