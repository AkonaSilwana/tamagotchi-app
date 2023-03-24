import React from "react";
import "./buttons.css";
import Nightbg from "../../Nightbg.webp";


const SleepButton = ({ setFoxState, setHealth, setHappiness, setBackgroundImage }) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handleSleepClick = () => {
    setFoxState("sleeping");
    setHealth((prevHealth) => Math.min(prevHealth + 2, MAX_HEALTH));
    setHappiness((prevHappiness) => Math.min(prevHappiness + 4, MAX_HAPPINESS));
    setBackgroundImage(Nightbg);

  };

  return (
    <button className="button" onClick={handleSleepClick}>
      Sleep
    </button>
  );
};

export default SleepButton;
