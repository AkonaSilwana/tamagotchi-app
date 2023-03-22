import "./App.css";
//import Tamagotchi from "./components/tamagotchi";
import Fox from "./components/fox";
import styled from "styled-components";

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
  return (
    <div className="App">
      <h1>Welcome to our Tamagotchi App</h1>
      <Tamagotchi>
        <Fox />
      </Tamagotchi>
    </div>
  );
}

export default App;
