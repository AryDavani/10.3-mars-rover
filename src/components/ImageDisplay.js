import React from 'react';


export default function ImageDisplay(props) {
  return (
    <div className="images">
      <img src={ props.image.img_src } alt="mars rover images" />
    </div>
  )
}
