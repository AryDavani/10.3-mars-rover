import React from 'react';


export default function ImageDisplay(props) {
  return (
    <div>
      <img src={ props.image.img_src } alt="mars rover" />
    </div>
  )
}
