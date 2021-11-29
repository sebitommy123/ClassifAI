import React from 'react';
import { Link } from 'react-router-dom';
import './section.css';

const Section = ({
  image,
  title,
  content,
  subtext,
  alt,
  buttonText,
  href
}) => {
  return (
    <div className={"section" + (alt ? " alt" : "")}>
      <div className="left">
        <img className="sectionImage" src={image} />
      </div>
      <div className="right">
        <div className="title">
          {title}
        </div>
        <div className="content">
          {content}
        </div>
        <div className="subtext">
          <Link to={href}><button className="fancyButton">{buttonText}</button></Link><br/>
          <div className="finalText">{subtext}</div>
        </div>
      </div>
    </div>
  )
}

export default Section;
