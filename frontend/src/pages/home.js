import React from "react";
import { PageTitle } from "../components/pageTitle";
import Section from "../components/section";
import Divider from "../components/divider";

import mainImg from "../images/main.png";
import codeologyImg from "../images/codeology.png";
import alphabetImg from "../images/signLanguage/alphabet.jpg";
import neuralNetworkImage from "../images/neuralNetwork.jpg";

const Home = () => {
  return (
    <div>
      <PageTitle
        mainImg={mainImg}
        titleImg={codeologyImg}
        title='ClassifAI'
        text={
          <>
            Applying Machine Learning to the real world by using Convolutional
            Neural Networks to classify images.
            <br />
            <br />
            Models include classification of Sign Language, Fashion items,
            Fungi, Heart conditions, Pneumonia conditions, and more. Built with
            tensorflow.
          </>
        }
        subtext={
          <>
            Contributors: Eric Berndt, Erin Tsai, Joelle Siong Sin, Larissa
            Tsai, Lincoln Too, Rachel Xin, Sebastiaan Szafir and Stephen Yang
          </>
        }
      />
      <Divider
        image={neuralNetworkImage}
        title='Classifiers:'
        content='ClassifAI is a collection of Classifiers.'
      />

      <Section
        image={alphabetImg}
        title='SAIgn Language'
        content={
          <>
            Low awareness of sign language presents a hurdle in communication
            with the deaf and dumb communities. <br />
            <br />
            This classifier is trained to identify the American Sign Language
            hand gestures with potential application as a Sign Language
            Interpreter.
          </>
        }
        subtext={"Contributors: Lincoln Too"}
        buttonText='Go to project'
        href='/signLanguage'
      />

      <Section
        image={alphabetImg}
        title='ChestifAI'
        alt
        content={
          <>
            A model that uses chest x-rays to classify whether someone has
            pneumonia or not.
          </>
        }
        subtext={"Contributors: Joelle Siong Sin"}
        buttonText='Go to project'
        href='/pneumonia'
      />

      <Section
        image={alphabetImg}
        title='ClassiFungAI'
        content={
          <>
            A CNN that classifies images of fungi (mushrooms or otherwise) as edible or poisonous.
          </>
        }
        subtext={"Contributors: Larissa Tsai"}
        buttonText='Go to project'
        href='/fungi'
      />

      <Section
        image={alphabetImg}
        title='BerkelAI'
        alt
        content={
          <>
            ClassifAIs different locations in UCB
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
          </>
        }
        subtext={"Contributors: Eric Berndt"}
        buttonText='Go to project'
        href='/berkeley'
      />

      <Section
        image={alphabetImg}
        title='Heart'
        alt
        content={
          <>
            ClassifAIs different locations in UCB
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
          </>
        }
        subtext={"Contributors: Heart"}
        buttonText='Go to project'
        href='/heart'
      />
    </div>
  );
};

export default Home;
