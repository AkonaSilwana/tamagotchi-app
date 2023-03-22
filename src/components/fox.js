import "./fox.css";
import React, { useState, useEffect } from "react";

const InitFox = <div className="idle"></div>;
const Eating = <div className="eating"></div>;
const happy = <div className="happy"></div>

const Fox = () => {
  const [fox, setFox] = useState(InitFox);

  const doing = "happy";

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
      default:
        setFox(InitFox);
    }
  }, [doing]);

  return <div>{fox}</div>;
};

export default Fox;
