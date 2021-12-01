import React, { useState } from "react";
import { sendMatrix } from "../utils/requestUtils";
import MatrixInput from "./matrixInput";
import MatrixOutput from "./matrixOutput";

import "./neuralNetworkInterface.css";

const NeuralNetworkInterface = ({
  endpoint,
  port,
  inputDimensions,
  samples,
  sampleLabels,
  labels,
  imageLabels,
  grayscale
}) => {
  const [outputVector, setOutputVector] = useState(
    new Array(labels.length).fill(0).map(() => Math.random())
  );
  const [loading, setLoading] = useState(false);

  const handleNewMatrix = newMatrix => {
    if (loading) return;

    if (grayscale) {
      newMatrix = newMatrix.map(row => row.map(rgb => [rgb[0]]));
    }

    setLoading(true);
    sendMatrix(endpoint + ":" + port, newMatrix).then(response => {
      setLoading(false);
      setOutputVector(response);
    });
  };

  return (
    <div className='neuralNetworkInterface'>
      <div className='left'>
        <MatrixInput
          dimensions={inputDimensions}
          onMatrixChange={handleNewMatrix}
          samples={samples}
          sampleLabels={sampleLabels}
          loading={loading}
        />
      </div>
      <div className={'right' + (loading ? " faded" : "")}>
        <MatrixOutput
          outputVector={outputVector}
          labels={labels}
          loading={loading}
          imageLabels={imageLabels}
        />
      </div>
    </div>
  );
};

export default NeuralNetworkInterface;
