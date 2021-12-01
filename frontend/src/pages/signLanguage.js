import React from 'react'
import { Link } from 'react-router-dom';
import ImageHeader from '../components/imageHeader';
import NeuralNetworkInterface from '../components/neuralNetworkInterface';

import wallpaper from '../images/neuralNetwork.jpg';

import A_test from '../images/signLanguage/A_test.jpg';
import B_test from '../images/signLanguage/B_test.jpg';
import C_test from '../images/signLanguage/C_test.jpg';
import D_test from '../images/signLanguage/D_test.jpg';
import E_test from '../images/signLanguage/E_test.jpg';
import F_test from '../images/signLanguage/F_test.jpg';
import G_test from '../images/signLanguage/G_test.jpg';
import H_test from '../images/signLanguage/H_test.jpg';
import I_test from '../images/signLanguage/I_test.jpg';
import J_test from '../images/signLanguage/J_test.jpg';
import K_test from '../images/signLanguage/K_test.jpg';
import L_test from '../images/signLanguage/L_test.jpg';
import M_test from '../images/signLanguage/M_test.jpg';
import N_test from '../images/signLanguage/N_test.jpg';
import O_test from '../images/signLanguage/O_test.jpg';
import P_test from '../images/signLanguage/P_test.jpg';
import Q_test from '../images/signLanguage/Q_test.jpg';
import R_test from '../images/signLanguage/R_test.jpg';
import S_test from '../images/signLanguage/S_test.jpg';
import T_test from '../images/signLanguage/T_test.jpg';
import U_test from '../images/signLanguage/U_test.jpg';
import V_test from '../images/signLanguage/V_test.jpg';
import W_test from '../images/signLanguage/W_test.jpg';
import X_test from '../images/signLanguage/X_test.jpg';
import Y_test from '../images/signLanguage/Y_test.jpg';
import Z_test from '../images/signLanguage/Z_test.jpg';
import nothing_test from '../images/signLanguage/nothing_test.jpg';
import space_test from '../images/signLanguage/space_test.jpg';

const SignLanguage = () => {
  const testingSet = [A_test, B_test, C_test, D_test, E_test, F_test, G_test, H_test, I_test, J_test, K_test, L_test, M_test, N_test, O_test, P_test, Q_test, R_test, S_test, T_test, U_test, V_test, W_test, X_test, Y_test, Z_test, nothing_test, space_test];

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
        endpoint={"http://localhost"}
        port={5000}
        inputDimensions={[200, 200]}
        labels={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "nothing", "space"]}
        imageLabels={testingSet}
        samples={testingSet}
        sampleLabels={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "nothing", "space"]}
      />
    </div>
  )
}

export default SignLanguage;