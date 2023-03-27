import React from "react";
import "./buttons.css";


const FeedButton = ({ isActive, setIsActive, setFoxState }) => {

  const handleFeedClick = () => {
    setFoxState("eating");
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
