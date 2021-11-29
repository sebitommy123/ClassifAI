import React from 'react';
import './divider.css';

const Divider = ({ image, title, content }) => {
  return (
    <div className="divider" style={{backgroundImage: `url(${image})`}}>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  )
}

export default Divider;
