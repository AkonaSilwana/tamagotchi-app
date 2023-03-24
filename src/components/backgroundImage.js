//   className="tamagotchi-screen"
// style={{ backgroundImage: `url(${backgroundImage})` }}

import "../App.css";
import React, { useState, useEffect } from "react";

import Daybg from "../images/Daybg.png";
import Nightbg from "../images/Nightbg.webp";

const BackgroundImage = ({ backgroundState }) => {
  const [backgroundImage, setBackgroundImage] = useState(Daybg);

  useEffect(() => {
    setBackgroundImage(Nightbg);
  }, [backgroundState]);
  return (
    <div
      className="tamagotchi-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {backgroundImage}
    </div>
  );
};

export default BackgroundImage;
