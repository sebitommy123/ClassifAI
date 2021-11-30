import React from 'react'
import { Link } from 'react-router-dom';
import ImageHeader from '../components/imageHeader';
import NeuralNetworkInterface from '../components/neuralNetworkInterface';

import wallpaper from '../images/neuralNetwork.jpg';

import img1 from '../images/fashion/1163.jpg';
import img2 from '../images/fashion/1164.jpg';
import img3 from '../images/fashion/1165.jpg';
import img4 from '../images/fashion/1525.jpg';
import img5 from '../images/fashion/1526.jpg';
import img6 from '../images/fashion/1528.jpg';
import img7 from '../images/fashion/1529.jpg';
import img8 from '../images/fashion/1530.jpg';
import img9 from '../images/fashion/1531.jpg';
import img10 from '../images/fashion/1532.jpg';


const Fashion = () => {
  const testingSet = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div>
      <ImageHeader image={wallpaper} title="ClassiFungAI" description={(<>
        A model that classifies any article of clothing into several distinct categories using Keras and Tensorflow.
      </>)} subtext="Contributors: Lincoln"/>
      <div className="breadcrumb">
        <Link to="/">Home</Link> > ClothesifAI
      </div>
      <NeuralNetworkInterface
        endpoint={"localhost"}
        port={5002}
        inputDimensions={[80,60]}
        labels={(new Array(143)).fill(0).map((_, i) => i)}
        samples={testingSet}
        sampleLabels={['Tshirts', 'Tshirts', 'Tshirts', 'Backpacks', 'Backpacks', 'Jackets', 'Tshirts', 'Jackets', 'Tshirts', 'Tshirts']}
      />
    </div>
  )
}

export default Fashion;