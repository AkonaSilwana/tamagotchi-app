import React from "react";
import "./buttons.css";

const SleepButton = ({
  isActive,
  setIsActive,
  setFoxState,
  setSleepiness,
  setHappiness,
  setHunger,
  healthState,
}) => {
  const MAX_SLEEPINESS = 100;
  const MAX_HAPPINESS = 100;
  const MAX_HUNGER = 100;
  const INTERVAL = 1000;

  const handleSleepClick = () => {
    setIsActive(() => false);
    setFoxState("sleeping");
    let healthInterval = setInterval(() => {
      setHealth((prevHealth) => {
        const newHealth = Math.min(prevHealth + 8, MAX_HEALTH);
        if (newHealth >= 95) {
          clearInterval(healthInterval);
          setFoxState("idle");
          clearInterval(happinessInterval);

          console.log("sleepclick");
          setIsActive(() => true);
          clearInterval(SleepInterval);
        }
        return newSleepiness;
      });
    }, INTERVAL);

    let happinessInterval = setInterval(() => {
      setHappiness((prevHappiness) =>
        Math.min(prevHappiness - 1, MAX_HAPPINESS)
      );
    }, INTERVAL);

    let hungerInterval = setInterval(() => {
      setHunger((prevHunger) => {
        const newHunger = Math.min(prevHunger + 2, MAX_HUNGER);
        if (newHunger >= 70) {
          clearInterval(SleepInterval);
          setFoxState("hungry");
          clearInterval(happinessInterval);

          setTimeout(() => {
            setIsActive(() => true);
          }, INTERVAL);
          clearInterval(hungerInterval);
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
