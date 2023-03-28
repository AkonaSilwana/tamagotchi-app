import "./App.css";
//import Tamagotchi from "./components/tamagotchi";
import Fox from "./components/fox";
import FeedButton from "./components/buttons/feedButton";
import React, { useState, useEffect } from "react";
import SleepButton from "./components/buttons/sleepButton";
import HugButton from "./components/buttons/hugButton";
import Daybg from "./images/Daybg.png";
import Nightbg from "./images/Nightbg.webp";
import BackgroundImage from "./components/backgroundImage";

const App = () => {
  const [fox, setFox] = useState("init");
  const MAX_HEALTH = 100;
  const MAX_HAPPINESS = 100;
  const MAX_HUNGER = 100;

  const [hunger, setHunger] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [health, setHealth] = useState(MAX_HEALTH);
  const [happiness, setHappiness] = useState(MAX_HAPPINESS);
  const [backgroundImage, setBackgroundImage] = useState(Daybg);

  useEffect(() => {
    const interval = setInterval(() => {
      setHealth((prevHealth) => Math.max(prevHealth - 1, 0));
      setHappiness((prevHappiness) => Math.max(prevHappiness - 2, 0));
      setHunger((prevHunger) => Math.min(prevHunger + 2, MAX_HUNGER));
    }, 8000);

    let hungerInterval = setInterval(() => {
      setHunger((prevHunger) => {
        if (prevHunger >= 70) {
          setIsActive((prevActive) => {
            if (prevActive === true) {
              setFox("hungry");
            }
            return prevActive;
          });
        }
        return prevHunger;
      });
    }, 500);

    setHealth((prevHealth) => {
      if (prevHealth === 0) {
        setIsActive((prevActive) => {
        
          
          return false;
        });
        setFox("dead");
       
      }
      return  prevHealth; 
    });
 

    return () => clearInterval(interval);
  }, [health]);

      

  return (
    <div>
      <BackgroundImage backgroundState={backgroundImage} healthState={health}>
        <div className="tamagotchi">
          <Fox foxState={fox} />
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
            setHunger={setHunger}
            healthState={health}
            setIsActive={setIsActive}
            setBackgroundImage={setBackgroundImage}
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
        <div className="stats">
          <p>Health: {health}</p>
          <p>Happiness: {happiness}</p>
          <p>Hunger: {hunger}</p>
        </div>

      </BackgroundImage>
    </div>
  );
};
export default App;
