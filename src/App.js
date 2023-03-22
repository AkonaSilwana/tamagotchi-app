import "./App.css";
//import Tamagotchi from "./components/tamagotchi";
import Fox from "./components/fox";
import styled from "styled-components";
import FeedButton from "./components/feedButton";
import React, { useState } from "react";

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

function App() {
  const [foxState, setFoxState] = useState("init");

  return (
    <div className="App">
      <h1>Welcome to our Tamagotchi App</h1>
      <Tamagotchi>
        <Fox setFoxState={setFoxState} />
      </Tamagotchi>
      <FeedButton setFoxState={setFoxState} />
    </div>
  );
}

export default App;
