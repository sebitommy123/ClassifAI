import React from 'react'
import { Link } from 'react-router-dom';
import ImageHeader from '../components/imageHeader';
import NeuralNetworkInterface from '../components/neuralNetworkInterface';

import wallpaper from '../images/neuralNetwork.jpg';

import pneunomia from '../images/pneunomia/pneunomia.jpeg';
import normal from '../images/pneunomia/normal.jpeg';

const Pneunomia = () => {
  const testingSet = [pneunomia, normal];

  return (
    <div>
      <ImageHeader image={wallpaper} title="ChestifAI" description={(<>
        A model that uses chest x-rays to classify whether someone has pneumonia or not.
      </>)} subtext="Contributors: Lincoln"/>
      <div className="breadcrumb">
        <Link to="/">Home</Link> > ChestifAI
      </div>
      <NeuralNetworkInterface
        endpoint={"http://localhost"}
        port={5007}
        inputDimensions={[150, 150]}
        grayscale
        labels={['PNEUMONIA', 'NORMAL']}
        imageLabels={testingSet}
        samples={testingSet}
        sampleLabels={['PNEUMONIA', 'NORMAL']}
      />
    </div>
  )
}

export default Pneunomia;