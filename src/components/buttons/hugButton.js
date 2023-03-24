import React from "react";
import "./buttons.css";


const HugButton = ({ setFoxState, setHealth, setHappiness }) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handleCleanClick = () => {
    setFoxState("happy");
    setHealth((prevHealth) => Math.min(prevHealth - 2, MAX_HEALTH));
    setHappiness((prevHappiness) => Math.min(prevHappiness - 9, MAX_HAPPINESS));
  };

  return (
    <button className="button" onClick={handleCleanClick}>
      Hug
    </button>
  );
};

export default HugButton;

