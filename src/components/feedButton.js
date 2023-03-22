import React from "react";

const FeedButton = ({ setFoxState }) => {
  const handleFeedClick = () => {
    console.log("feed!");
    setFoxState("eating");
  };

  return <button onClick={handleFeedClick}>Feed Fox</button>;
};

export default FeedButton;
