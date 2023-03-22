import "./fox.css";
import React, { useState, useEffect } from "react";

const InitFox = <div className="idle"></div>;
const Eating = <div className="eating"></div>;

const Fox = () => {
  const [fox, setFox] = useState(InitFox);

  const doing = "init";

  useEffect(() => {
    switch (doing) {
      case "init":
        setFox(InitFox);
        break;
      case "eating":
        setFox(Eating);
        break;
      default:
        setFox(InitFox);
    }
  }, [doing]);

  return <div>{fox}</div>;
};

export default Fox;
