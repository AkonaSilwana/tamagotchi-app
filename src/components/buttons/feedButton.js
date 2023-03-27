import React from "react";
import "./buttons.css";

const FeedButton = ({ isActive, setIsActive, setFoxState, setHunger }) => {
  const handleFeedClick = () => {
    setFoxState("eating");
    setHunger((prevHunger) => {
      prevHunger = prevHunger - 25;
      if (prevHunger < 0) {
        prevHunger = 0;
      }
      return prevHunger;
    });
    setIsActive(false);
    setTimeout(() => {
      setFoxState("idle");
    }, 3000);
    setIsActive(true);
  };

  return (
    <button
      className={isActive ? "activeButton" : "inactiveButton"}
      disabled={!isActive}
      onClick={handleFeedClick}
    >
      Feed
    </button>
  );
};
export default FeedButton;
