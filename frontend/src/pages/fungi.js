import React from 'react'
import { Link } from 'react-router-dom';
import ImageHeader from '../components/imageHeader';
import NeuralNetworkInterface from '../components/neuralNetworkInterface';

import wallpaper from '../images/neuralNetwork.jpg';

import edible from '../images/fungi/edible.jpeg';
import poisonous from '../images/fungi/poisonous.jpg';

const Fungi = () => {
  const testingSet = [edible, poisonous];

  return (
    <div>
      <ImageHeader image={wallpaper} title="SAIgn Language" description={(<>
        Low awareness of sign language presents a hurdle in communication with the deaf and dumb communities. <br /><br />
        This classifier is trained to identify the American Sign Language hand gestures with potential application as a Sign Language Interpreter.
      </>)} subtext="Contributors: Lincoln"/>
      <div className="breadcrumb">
        <Link to="/">Home</Link> > SAIgn Language
      </div>
      <NeuralNetworkInterface
        endpoint={"localhost"}
        port={5003}
        inputDimensions={[224, 224]}
        labels={["Edible", "Poisonous"]}
        imageLabels={testingSet}
        samples={testingSet}
        sampleLabels={["Edible", "Poisonous"]}
      />
    </div>
  )
}

export default Fungi;