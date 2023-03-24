import React from "react";
import "./buttons.css";
import Nightbg from "../images/Nightbg.webp";

const SleepButton = ({
  isActive,
  setIsActive,
  setFoxState,
  setHealth,
  setHappiness,
  setBackgroundImage,
}) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handleSleepClick = () => {
    setFoxState("sleeping");
    setHealth((prevHealth) => Math.min(prevHealth + 2, MAX_HEALTH));
    setHappiness((prevHappiness) => Math.min(prevHappiness + 4, MAX_HAPPINESS));
    setBackgroundImage(Nightbg);
  };

  return (
    <button
      className={isActive ? "activeButton" : "inactiveButton"}
      disabled={!isActive}
      onClick={handleSleepClick}
    >
      Sleep
    </button>
  );
};

export default SleepButton;
