import React from 'react'

import './imageHeader.css';

const ImageHeader = ({
  image,
  title,
  description
}) => {
  return (
    <div className="imageHeader" style={{backgroundImage: `url(${image})`}}>
      <div className="imageTitle">{title}</div>
      <div className="imageDescription">{description}</div>
    </div>
  )
}

export default ImageHeader;