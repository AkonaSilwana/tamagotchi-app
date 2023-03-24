import React from "react";
import "./buttons.css";

const SleepButton = ({
  isActive,
  setIsActive,
  setFoxState,
  setHealth,
  setHappiness,
}) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handleSleepClick = () => {
    setFoxState("sleeping");
    setHealth((prevHealth) => Math.min(prevHealth + 2, MAX_HEALTH));
    setHappiness((prevHappiness) => Math.min(prevHappiness + 4, MAX_HAPPINESS));
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
