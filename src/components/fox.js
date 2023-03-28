import "./fox.css";
import React, { useState, useEffect } from "react";



const Eating = <div className="eating"></div>;
const happy = <div className="happy"></div>;
const hungry = <div className="hungry"></div>;
const dead = <div className="dead"></div>;
const idle = <div className="idle"></div>;
const sleeping = <div className="sleeping"></div>;
const hatching = <div className="hatching"></div>

const Fox = ({ foxState }) => {
  const [fox, setFox] = useState(null);

    useEffect(() => {

    const setFoxIdle = () => {
      setFox(hatching)

      setTimeout(() => {
        setFox(idle);
      }, 3000);
    };
    const InitFox = () => (
      <div className="egg" onClick={setFoxIdle} ></div>
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
