import "./App.css";
//import Tamagotchi from "./components/tamagotchi";
import Fox from "./components/fox";
import styled from "styled-components";
import FeedButton from "./components/feedButton";
import React, { useState } from "react";
import SleepButton from "./components/sleepButton";

//idk fix this later?
const Tamagotchi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const App = () => {
  const [fox, setFox] = useState("init");

  return (
    <div>
      <Fox foxState={fox} />
      <FeedButton setFoxState={setFox} />
      <SleepButton setFoxState={setFox} />
    </div>
  );
};

export default App;
