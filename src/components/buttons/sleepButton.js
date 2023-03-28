import React from "react";
import "./buttons.css";

const SleepButton = ({
  isActive,
  setIsActive,
  setFoxState,
  setHealth,
  setHappiness,
  setHunger,
  healthState,
}) => {
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;
  const MAX_HUNGER = 100;
  const INTERVAL = 1000;

  const handleSleepClick = () => {
    setIsActive(false);
    setFoxState("sleeping");
    let healthInterval = setInterval(() => {
      setHealth((prevHealth) => {
        const newHealth = Math.min(prevHealth + 8, MAX_HEALTH);
        if (newHealth >= 95) {
          clearInterval(healthInterval);
          setFoxState("idle");
          clearInterval(happinessInterval);

          setIsActive(true);
        }
        return newHealth;
      });
    }, INTERVAL);

    let happinessInterval = setInterval(() => {
      setHappiness((prevHappiness) =>
        Math.min(prevHappiness + 8, MAX_HAPPINESS)
      );
    }, INTERVAL);

    let hungerInterval = setInterval(() => {
      setHunger((prevHunger) => {
        const newHunger = Math.min(prevHunger + 2, MAX_HUNGER);
        if (newHunger >= 70) {
          clearInterval(healthInterval);
          setFoxState("hungry");
          clearInterval(happinessInterval);
          clearInterval(hungerInterval);
          setIsActive(true);
        }
        return newHunger;
      });
    }, INTERVAL);
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
