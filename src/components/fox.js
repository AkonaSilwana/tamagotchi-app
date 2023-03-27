import "./fox.css";
import React, { useState, useEffect } from "react";

// const InitFox =  ({ setFoxIdle }) => (<div className="hatching" onClick={() => setFoxIdle()}></div>);
const Eating = <div className="eating"></div>;
const happy = <div className="happy"></div>;
const hungry = <div className="hungry"></div>;
const dead = <div className="dead"></div>;
const idle = <div className="idle"></div>;
const sleeping = <div className="sleeping"></div>;

const Fox = ({ foxState }) => {
  const [fox, setFox] = useState(null);

 

  useEffect(() => {

    const setFoxIdle = () => {
      setFox(idle);
    };
    const InitFox = () => (
      <div className="hatching" onClick={setFoxIdle}></div>
    );
    switch (foxState) {
      case "init":
        
        setFox(<InitFox/>);
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
        setFox(InitFox);
    }
  }, [foxState]);

  return <div>{fox}</div>;
};

export default Fox;
