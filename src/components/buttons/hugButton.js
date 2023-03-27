import React from "react";
import "./buttons.css";

const CleanButton = ({
  isActive,
  setIsActive,
  setFoxState,
  setHealth,
  setHappiness,
}) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handleCleanClick = () => {
    setFoxState("happy");
    setHealth((prevHealth) => Math.min(prevHealth + 1, MAX_HEALTH));
    setHappiness((prevHappiness) => Math.min(prevHappiness + 20, MAX_HAPPINESS));
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
      setFoxState("idle");
    }, 4000);
  };

  return (
    <button
      className={isActive ? "activeButton" : "inactiveButton"}
      disabled={!isActive}
      onClick={handleCleanClick}
    >
      Hug
    </button>
  );
};

export default CleanButton;
