import React from "react";
import "./buttons.css";

const FeedButton = ({ isActive, setIsActive, setFoxState, setHunger }) => {
  const handleFeedClick = () => {
    setFoxState("eating");
    setHunger((prevHunger) => Math.max(prevHunger - 1, 0));
    setIsActive(false);
    setTimeout(() => {
      setFoxState("idle");
      setIsActive(true);
    }, 3000);
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
