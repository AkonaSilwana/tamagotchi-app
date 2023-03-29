import "./fox.css";
import React, { useState, useEffect } from "react";
import SpeechBubble from "./speechBubble";

const Eating = (
  <>
    <SpeechBubble text="Thank you for feeding me. I really needed that" />
    <div className="eating"></div>
  </>
);
const happy = (
  <>
    <SpeechBubble text="Thank you for hugging me. I really needed that" />
    <div className="happy"></div>
  </>
);
const hungry = (
  <>
    <SpeechBubble text="Feed me!" />
    <div className="hungry"></div>
  </>
);
const dead = (
  <>
    <SpeechBubble text="RIP" />
    <div className="dead"></div>
  </>
);
const idle = (
  <>
    <SpeechBubble text="Hello! I am your digital friend. I grow as your career grows I am here to keep you company. you can play with me by clicking the buttons give me a name" />
    <div className="idle"></div>
  </>
);
const sleeping = (
  <>
    <SpeechBubble text="I am exhausted! Let me sleep and unlock all my knowledge" />
    <div className="sleeping"></div>
  </>
);

const hatching = <div className="hatching"></div>;
const Fox = ({ foxState, setFoxState }) => {
  const [fox, setFox] = useState();

  const setFoxIdle = () => {
    setFox(hatching);
    setTimeout(() => {
      setFoxState(() => "idle");
    }, 3000);
  };
  const InitFox = () => <div className="egg" onClick={setFoxIdle}></div>;

  useEffect(() => {
    switch (foxState) {
      case "init":
        setFox(<InitFox />);
        break;
      case "hatching":
        setFox(hatching);
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
      case "idle":
        setFox(idle);
        break;
      default:
        setFox(idle);
    }
  }, [foxState]);
  return <div>{fox}</div>;
};
export default Fox;
