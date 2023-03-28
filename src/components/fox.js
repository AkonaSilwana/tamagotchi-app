import "./fox.css";
import React, { useState, useEffect } from "react";
import SpeechBubble from "./speechBubble";


const Eating = (
  <SpeechBubble text="Thank you for feeding me. I really needed that">
   <div className="eating"></div>
  </SpeechBubble>
 );
 const happy = (
  <SpeechBubble text="Thank you for hugging me. I really needed that">
   <div className="happy"></div>
  </SpeechBubble>
 );
 const hungry = (
  <SpeechBubble text="Feed me!">
   <div className="hungry"></div>
  </SpeechBubble>
 );
 const dead = (
  <SpeechBubble text="RIP">
   <div className="dead"></div>
  </SpeechBubble>
 );
 const idle = (
  <SpeechBubble  text="Hello! I am your digital friend. I grow as your career grows I am here to keep you company. you can play with me by clicking the buttons give me a name" >
   <div className="idle"></div>
  </SpeechBubble>
 );
 const sleeping = (
  <SpeechBubble text="I am exhausted! Let me sleep and unlock all my knowledge">
   <div className="sleeping"></div>
  </SpeechBubble>
 );
 const hatching = <div className="hatching"></div>
 const Fox = ({ foxState }) => {
  const [fox, setFox] = useState(null);
  useEffect(() => {
   const setFoxIdle = () => {
    setFox(hatching);
    setTimeout(() => {
     setFox(idle);
    }, 3000);
   };
   const InitFox = () => (
    <SpeechBubble text="Hi there Click me to hatch!">
     <div className="egg" onClick={setFoxIdle}></div>
    </SpeechBubble>
   );
   switch (foxState) {
    case "init":
     setFox(<InitFox/>)
     break;
    case "eating":
     setFox(Eating);
     break;
    case "happy":
     setFox(happy);
     break;
    case "hungry":
     setFox(hungry);
     break;
    case "dead":
     setFox(dead);
     break;
    case "sleeping":
     setFox(sleeping);
     break;
    default:
     setFox(idle);
   }
  }, [foxState]);
  return <div>{fox}</div>;
 };
 export default Fox;
