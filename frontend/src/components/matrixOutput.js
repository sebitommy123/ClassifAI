import React, { useState, useRef, useEffect } from 'react'
import BarChart from './barChart';
import './matrixOutput.css';

const MatrixOutput = ({
  outputVector,
  labels,
  imageLabels,
  loading
}) => {

  useEffect(() => {
    console.log('outputVector', outputVector);
  }, [outputVector]);

  let maxCertainty = Math.max(...outputVector);
  let maxCertaintyIndex = outputVector.indexOf(maxCertainty);
  let maxCertaintyLabel = labels[maxCertaintyIndex];

  let maxCertaintyLabelImage = null;
  if (imageLabels) maxCertaintyLabelImage = imageLabels[maxCertaintyIndex];

  return (
    <div className={"matrixOutput" + (loading ? " faded" : "")}>
      <div className='header'>
        <b>Output: </b>The prediction will appear here!
      </div>
      <div className="result">
        <div className="resleft">
          <div>Result: <b>{maxCertaintyLabel}</b></div>
          <div>Certainty: <b>{Math.round(maxCertainty * 10000) / 100}</b>%</div>
        </div>
        { maxCertaintyLabelImage &&
        <div className="resright">
          <img src={maxCertaintyLabelImage} alt={maxCertaintyLabel} />
        </div>
        }
      </div>
      <BarChart data={outputVector} labels={labels} images={imageLabels}/>
    </div>
  )
}

export default MatrixOutput;
