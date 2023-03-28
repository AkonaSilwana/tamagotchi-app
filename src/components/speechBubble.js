import speech from "./speech.css";
import React, {useState,useEffect} from 'react';
import "./fox.css";
const SpeechBubble = ({ text, children }) => (
    <div className="speech-bubble-container">
     <div className="speech-bubble">
      {text}
     </div>
     {children}
    </div>
   );
export default SpeechBubble