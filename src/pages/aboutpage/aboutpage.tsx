import React, { useEffect, useState } from "react";
import { Panel } from "components/panel/Panel";
import { Question } from "components/question/Question";
import { Boat } from "components/boat/Boat";
import { BigTitle } from "components/big-title/big-title";
import { Background } from "components/background/background";
import { Input } from "components/input/Input";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "components/button/Button";
import "./aboutpage.scss"


interface IProps {}
export const AboutPage = (props: IProps) => {
  return (
    <div className="about-page">
    <div className="about-page-inner">

    <h1>About page </h1>
    <div className ="aboutpage-text">
       This page was created by Erik Rehn and Gustav Kasche.  Its was created as a school project. The purpose was to make a web application were the user integrates with data provided by an AI. The to main focuses where interaction, visualisation and user friendliness. 
<br></br>
<br></br>
 

<h2>Instructions </h2>
Enter your desired username and press start game. Answer the questions as you want. You can either base your answers on yourself or test different values to see what parameters that effects you survival chance the most. The question are based on an AI that’s trained on the real Titanic passenger data.

<br></br>
<br></br>


<h2>Visualzation </h2>
There is a visualisation page in the top bar of the question page were the you can see visualisations of your current survival chances. 
<br></br>
<br></br>

<h2>The tech </h2>
This web applications was built with React, Redux, Typescript, GraphQL. It implements scss to make styling easiser.
Its dataset is based on real world data and a decision tree is generated with 
AI to provide the most efficient question to answer the question if you will 
survive the <b>Titanic</b>
<br></br>
<br></br>


<Button onClick={()=>(window.location.href = "/")} className="start-playing-button">start playing</Button>
<br></br>
 </div>
  <Boat position="bottom-right-big"></Boat> 

    <Background></Background>
    </div>
    </div>
  )
};
