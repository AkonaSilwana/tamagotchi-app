import React from "react";
import "./buttons.css";

const HugButton = ({
  isActive,
  setIsActive,
  setFoxState,
  setSleepiness,
  setHappiness,
}) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handlHugClick = () => {
    setFoxState("happy");
    setSleepiness((prevHealth) => Math.min(prevHealth + 1, MAX_HEALTH));
    setHappiness((prevHappiness) =>
      Math.min(prevHappiness + 20, MAX_HAPPINESS)
    );
    setIsActive(() => false);
    setTimeout(() => {
      console.log("hug click");
      setIsActive(() => true);
      setFoxState("idle");
    }, 4000);
  };

  return (
    <button
      className={isActive ? "activeButton" : "inactiveButton"}
      disabled={!isActive}
      onClick={handlHugClick}
    >
      Hug
    </button>
  );
};

export default HugButton;
