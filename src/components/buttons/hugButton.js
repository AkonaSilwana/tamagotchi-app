import React from "react";

const CleanButton = ({ setFoxState, setHealth, setHappiness }) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const handleCleanClick = () => {
    setFoxState("happy");
    setHealth((prevHealth) => Math.min(prevHealth + 6, MAX_HEALTH));
    setHappiness((prevHappiness) => Math.min(prevHappiness - 2, MAX_HAPPINESS));
  };

  return <button onClick={handleCleanClick}>Clean</button>;
};

export default CleanButton;

