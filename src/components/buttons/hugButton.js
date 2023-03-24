import React from "react";
import "./buttons.css";


const CleanButton = ({ setFoxState, setHealth, setHappiness }) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handleCleanClick = () => {
    setFoxState("happy");
    setHealth((prevHealth) => Math.min(prevHealth + 6, MAX_HEALTH));
    setHappiness((prevHappiness) => Math.min(prevHappiness - 2, MAX_HAPPINESS));
    setFoxState("idle");
  };

  return (
    <button className="button" onClick={handleCleanClick}>
      Hug
    </button>
  );
};

export default CleanButton;

