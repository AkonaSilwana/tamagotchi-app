import "./fox.css";
import React, { useState, useEffect } from "react";

const InitFox = <div className="idle"></div>;
const Eating = <div className="eating"></div>;
const happy = <div className="happy"></div>
const hungry = <div className="hungry"></div>
const dead = <div className="dead"></div>
const hatching = <div className="hatching"></div>
const sleeping = <div className="sleeping"></div>

const Fox = () => {
  const [fox, setFox] = useState(InitFox);

  const doing = "sleeping";

  useEffect(() => {
    switch (doing) {
      case "init":
        setFox(InitFox);
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
            case "hatching":
            setFox(hatching);
            break;
            case "sleeping":
            setFox(sleeping);
            break;
      default:
        setFox(InitFox);
    }
  }, [doing]);

  return <div>{fox}</div>;
};

export default Fox;
