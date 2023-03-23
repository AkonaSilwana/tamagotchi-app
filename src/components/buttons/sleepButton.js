import React from "react";

const SleepButton = ({ setFoxState, setHealth, setHappiness }) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handleSleepClick = () => {
    //console.log("feed!");
    setFoxState("sleeping");
    setHealth((prevHealth) => Math.min(prevHealth + 2, MAX_HEALTH));
    setHappiness((prevHappiness) => Math.min(prevHappiness + 4, MAX_HAPPINESS));
  };

  return <button onClick={handleSleepClick}>Sleep</button>;
};

export default SleepButton;
