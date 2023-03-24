import React from "react";
import "./buttons.css";

const FeedButton = ({ setFoxState, setHunger }) => {
  const handleFeedClick = () => {
    setFoxState("eating");
    setHunger((prevHunger) => Math.max(prevHunger - 1, 0));
    setFoxState("idle");
  };

  return (
    <button className="button" onClick={handleFeedClick}>
      Feed
    </button>
  );
};
export default FeedButton;
