import "./App.css";
//import Tamagotchi from "./components/tamagotchi";
import Fox from "./components/fox";
//import styled from "styled-components";
import FeedButton from "./components/buttons/feedButton";
import React, { useState, useEffect } from "react";
import SleepButton from "./components/buttons/sleepButton";
import HugButton from "./components/buttons/hugButton";

const App = () => {
  const [fox, setFox] = useState("init");
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;

  const [isActive, setIsActive] = useState(true);

  const [health, setHealth] = useState(MAX_HEALTH);
  const [happiness, setHappiness] = useState(MAX_HAPPINESS);
  const [hunger, setHunger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth((prevHealth) => Math.max(prevHealth - 4, 0));
      setHappiness((prevHappiness) => Math.max(prevHappiness - 6, 0));
      setHunger((prevHunger) => prevHunger + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tamagotchi-screen">
      <div className="tamagotchi">
        <Fox foxState={fox} />
      </div>
      <div className="stats">
        <p>Health: {health}</p>
        <p>Happiness: {happiness}</p>
        <p>Hunger: {hunger}</p>
      </div>
      <div className="actions">
        <FeedButton
          isActive={isActive}
          setIsActive={setIsActive}
          setFoxState={setFox}
          setHunger={setHunger}
        />
        <SleepButton
          isActive={isActive}
          setIsActive={setIsActive}
          setFoxState={setFox}
          setHealth={setHealth}
          setHappiness={setHappiness}
        />
        <HugButton
          isActive={isActive}
          setIsActive={setIsActive}
          setFoxState={setFox}
          setHealth={setHealth}
          setHappiness={setHappiness}
        />
      </div>
    </div>
  );
};
export default App;
