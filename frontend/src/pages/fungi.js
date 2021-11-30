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
      <ImageHeader image={wallpaper} title="ClassiFungAI" description={(<>
        A CNN that classifies images of fungi (mushrooms or otherwise) as edible or poisonous.
      </>)} subtext="Contributors: Lincoln"/>
      <div className="breadcrumb">
        <Link to="/">Home</Link> > ClassiFungAI
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