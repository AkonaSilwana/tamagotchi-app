import React from "react";

const FeedButton = ({ setFoxState, setHunger }) => {
  const handleFeedClick = () => {
    setFoxState("eating");
    setHunger((prevHunger) => Math.max(prevHunger - 1, 0));
  };

  return <button onClick={handleFeedClick}>Feed Fox</button>;
};
export default FeedButton;
