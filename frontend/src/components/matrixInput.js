import React, { useState, useRef, useEffect } from "react";
import "./matrixInput.css";

import { imageElementToMatrix } from "../utils/imageUtils";

const MatrixVisualizer = ({ matrix }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = matrix[0].length;
    const height = matrix.length;

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    const data = matrix.reduce((acc, row, i) => {
      row.forEach((col, j) => {
        const r = col[0];
        const g = col[1];
        const b = col[2];
        acc.push(r, g, b, 255);
      });
      return acc;
    }, []);

    const imageData = new ImageData(new Uint8ClampedArray(data), width, height);
    ctx.putImageData(imageData, 0, 0);
  }, [matrix]);

  return (
    <canvas ref={canvasRef}></canvas>
  )

}

const SampleList = ({ samples, sampleLabels, dimensions, onSampleSelect, selectedSample }) => {

  const handleClick = (event, i) => {
    if (event.target.nodeName == "IMG") {
      let res = imageElementToMatrix(event.target);

      let i = Array.prototype.indexOf.call(
        event.target.parentElement.parentElement.children,
        event.target.parentElement
      );

      onSampleSelect(res, i);
    }
  };

  return (
    <div className='sampleList' onClick={handleClick}>
      {samples.map((sample, i) => {
        return (
          <div className={'sample' + (i == selectedSample ? ' selected' : '')} key={i}>
            <img
              src={sample}
              style={{ height: dimensions[0], width: dimensions[1] }}
              className='sampleImg'
            />
            <div className='sampleLabel'>{sampleLabels[i]}</div>
          </div>
        );
      })}
    </div>
  );
};

const MatrixInput = ({ dimensions, onMatrixChange, samples, sampleLabels, loading }) => {
  const [selectedMatrix, setSelectedMatrix] = useState({
    type: null
  });

  const handleSendImage = () => {
    if (selectedMatrix.type) {
      onMatrixChange(selectedMatrix.matrix);
    }
  }

  const handleSampleSelect = (newMatrix, i) => {
    setSelectedMatrix({
      type: "sample",
      matrix: newMatrix,
      id: i
    });
  };

  const handlePotentialCustomImage = event => {

    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        const matrix = imageElementToMatrix(img, dimensions[1], dimensions[0]);
        setSelectedMatrix({
          type: "custom",
          matrix: matrix,
          id: null
        });
      }

      img.src = reader.result;
    }

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

  }

  return (
    <div className='matrixInput'>
      <div className='header'>
        <b>Input: </b>Send an image to the classifier!
      </div>
      <center>
        {
          selectedMatrix.type &&
          <button onClick={handleSendImage} className={"fancyButton" + (loading ? " disabled" : "")} style={{marginTop: 25, marginBottom: 20}}>Send selected image</button>
        }
      </center>
      <div className='iSection'>
        <div className='title'>Upload a custom image</div>
        <label htmlFor='uploadFile' className='fancyButton'>
          Upload custom image
        </label>
        <input type='file' id='uploadFile' style={{ display: "none" }} onChange={handlePotentialCustomImage}/>
        {
          selectedMatrix.type == "custom" &&
          <div className="selectedCustomImage">
            <h3>Selected custom image:</h3>
            <div className="selectedWhiteShadow">
              <MatrixVisualizer matrix={selectedMatrix.matrix}/>
            </div>
          </div>
        }
      </div>
      {samples && (
        <div className='iSection'>
          <div className='title'>Or choose one of these:</div>
          <SampleList
            selectedSample={
              selectedMatrix.type == "sample" ? selectedMatrix.id : null
            }
            dimensions={dimensions}
            samples={samples}
            sampleLabels={sampleLabels}
            onSampleSelect={handleSampleSelect}
          />
        </div>
      )}
    </div>
  );
};

export default MatrixInput;
