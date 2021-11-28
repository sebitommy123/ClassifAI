import React from 'react';
import './pageTitle.css';
import mainImg from '../images/main.png';
import codeologyImg from '../images/codeology.png';

export const PageTitle = () => {
  return (
    <div className="pageTitle">
      <div className="left">
        <svg viewBox="20 20 160 180" xmlns="http://www.w3.org/2000/svg">
          <path fill="#24A148" d="M61.1,-52.4C70.6,-36.8,63.8,-11.9,57.6,12.3C51.4,36.6,45.9,60.2,29.6,72.2C13.3,84.1,-13.7,84.4,-35.3,73.8C-57,63.2,-73.2,41.8,-75.6,20.3C-78,-1.1,-66.7,-22.6,-51.8,-39.4C-36.9,-56.2,-18.4,-68.3,3.7,-71.3C25.8,-74.2,51.6,-68,61.1,-52.4Z" transform="translate(100 100)" />
          <image href={mainImg} x="50" y="60" width="100" height="100" preserveAspectRatio="xMidYMid slice"/>
        </svg>
      </div>
      <div className="right">
        <div className="titleContent">
          <img src={codeologyImg} className="titleCodeologyIcon"/>
          ClassifAI
        </div>
        <div className="titleDescription">
          Applying Machine Learning to the real world by using Convolutional Neural Networks to classify images.<br />
          <br />
          Models include classification of Letters, Fashion items, Fungi, Heart conditions, Pneumonia conditions, and more. Built with tensorflow.
        </div>
        <div className="titleAuthors">
          By Eric Berndt, Erin Tsai, Joelle Siong Sin, Larissa Tsai, Lincoln Too, Rachel Xin, Sebastiaan Szafir and Stephen Yang
        </div>
      </div>
    </div>
  )
}
