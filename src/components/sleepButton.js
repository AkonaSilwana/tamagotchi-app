import React from "react";

const SleepButton = ({ setFoxState }) => {
  const handleSleepClick = () => {
    //console.log("feed!");
    setFoxState("sleeping");
  };

  return <button onClick={handleSleepClick}>Sleep</button>;
};

export default SleepButton;
